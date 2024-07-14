import fileDownload from 'js-file-download';
import qs from 'qs';
import { useRecoilCallback } from 'recoil';
import { CustomError } from 'ts-custom-error';

import { IAuth } from '@/models/auth';
import { authAtom } from '@/recoil/atoms/authState';

function getRequestBody(method: string, data: any) {
	if (method === 'GET' || !data) {
		return null;
	}

	if (data instanceof FormData) {
		return data;
	}

	return JSON.stringify(data);
}

let _refreshToken: Promise<IAuth> | undefined;

export function useFetchWrapper() {
	return useRecoilCallback(
		({ snapshot, set }) =>
			() => {
				const authVal = snapshot.getLoadable(authAtom).getValue();
				const setAuth = (auth: IAuth | null) => set(authAtom, auth);

				return {
					get: request('GET', authVal, setAuth),
					patch: request('PATCH', authVal, setAuth),
					post: request('POST', authVal, setAuth),
					put: request('PUT', authVal, setAuth),
					delete: request('DELETE', authVal, setAuth)
				};
			},
		[]
	);
}

// eslint-disable-next-line no-unused-vars
function request(method: string, auth: IAuth | null, setAuth: (auth: IAuth | null) => void) {
	return (path: string, data = {} as any, allowRetry = true, downloadFilename: string | undefined = undefined) => {
		let url = `/api/${path}`;

		if (method === 'GET' && data) {
			const querystring = qs.stringify(data, { arrayFormat: 'brackets' });
			url += `?${querystring}`;
		}

		// eslint-disable-next-line no-undef
		const requestOptions: RequestInit = {
			body: getRequestBody(method, data),
			method,
			mode: 'cors',
			headers: getHeaders(method, auth, data instanceof FormData)
		};

		return fetch(url, requestOptions).then((response) =>
			handleResponse(url, auth, setAuth, requestOptions, response, allowRetry, downloadFilename)
		);
	};
}

// helper functions
// eslint-disable-next-line no-unused-vars
function refreshToken(auth: IAuth, setAuth: (auth: IAuth | null) => void): Promise<IAuth> {
	if (_refreshToken) {
		return _refreshToken;
	}

	const url = `/api/auth/refresh`;
	const requestOptions = {
		method: 'POST',
		headers: getHeaders('POST', auth, false),
		body: JSON.stringify({ refresh_token: auth.refresh_token })
	};
	_refreshToken = fetch(url, requestOptions)
		.finally(() => {
			_refreshToken = undefined;
		})
		.then((response) => handleResponse(url, auth, setAuth, requestOptions, response, false));

	return _refreshToken;
}

function getHeaders(method: string, auth: IAuth | null, isMultiPartForm: boolean) {
	// return auth header with jwt if user is logged in and request is to the api url
	const token = auth?.access_token;
	const isLoggedIn = !!token;
	const headers: Record<string, string> = {
		'Access-Control-Request-Headers': 'Authorization, Content-Type',
		'Access-Control-Request-Method': method.toUpperCase()
	};

	if (!isMultiPartForm) {
		headers['Content-Type'] = 'application/json';
	}

	if (isLoggedIn) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	return headers;
}

function handleResponse(
	url: string,
	auth: IAuth | null,
	// eslint-disable-next-line no-unused-vars
	setAuth: (auth: IAuth | null) => void,
	requestOptions: any,
	response: Response,
	allowRetry: boolean,
	downloadFilename?: string
): any {
	if (response.ok && downloadFilename) {
		const disposition = response.headers.get('content-disposition') ?? '';
		const filenameIdx = disposition.indexOf('filename=');

		if (filenameIdx >= 0) {
			downloadFilename = disposition.substring(filenameIdx + 9).replace(/"/g, '');
		}

		return response
			.blob()
			.then((blob) => fileDownload(blob, downloadFilename as string, response.headers.get('content-type') ?? undefined));
	}

	return response.text().then((text: string) => {
		let data: any;

		if (text) {
			try {
				data = JSON.parse(text);
			} catch (e) {
				console.error(e);
			}
		}

		if (!response.ok) {
			if (response.status === 401 && auth && allowRetry) {
				// login
				return refreshToken(auth, setAuth)
					.catch((error) => {
						// logout if refresh failed
						localStorage.removeItem('recoil-persist');
						setAuth(null);
						console.error(error);

						throw new HttpError(401, 'Login session expired. Please reauthenticate!');
					})
					.then((refreshResponse) => {
						const newAuth = {
							...auth,
							access_token: refreshResponse.access_token,
							refresh_token: refreshResponse.refresh_token
						};
						setAuth(newAuth);

						// retry initial call
						requestOptions.headers['Authorization'] = `Bearer ${refreshResponse.access_token}`;

						return fetch(url, requestOptions).then((updatedResponse) =>
							handleResponse(url, newAuth, setAuth, requestOptions, updatedResponse, false, downloadFilename)
						);
					});
			}

			const message: string = data?.error || data?.description || response.statusText;

			if (response.status === 403 && auth) {
				if (message.startsWith('Your user account is disabled')) {
					// logout user
					localStorage.removeItem('recoil-persist');
					setAuth(null);
				} else {
					// show error page if 403 Forbidden response returned from api
					// router.push('/error');
				}
			}

			throw new HttpError(response.status, message);
		}

		return data;
	});
}

export class HttpError extends CustomError {
	public constructor(
		// eslint-disable-next-line no-unused-vars
		public code: number,
		message: string
	) {
		super(message);
	}
}
