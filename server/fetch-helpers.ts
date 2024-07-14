/* eslint-disable import/order */
import { IncomingHttpHeaders } from 'http';
import type { NextApiRequest, NextApiResponse } from 'next';
import fetch, { RequestInit } from 'node-fetch';
import qs from 'qs';
import { Readable } from 'stream';
import { CustomError } from 'ts-custom-error';

/* eslint-enable import/order */

function request(method: string) {
	return async (path: string, headers: IncomingHttpHeaders, data: any = null) => {
		const url = new URL(path, process.env.BACKEND_API);

		if (method === 'GET' && data) {
			url.search = qs.stringify(data, { arrayFormat: 'brackets' });
		}

		let body: any = null;

		if (method !== 'GET' && data) {
			body = data instanceof Readable ? data : JSON.stringify(data);
		}

		const requestOptions: RequestInit = {
			body,
			method,
			headers: getSanitizedHeaders(url.host, headers)
		};

		return await fetch(url.href, requestOptions);
	};
}

function getSanitizedHeaders(host: string, headers: IncomingHttpHeaders) {
	return {
		host,
		'user-agent': headers['user-agent'],
		referer: headers.referer,
		origin: headers.origin,
		'content-type': headers['content-type'],
		authorization: headers.authorization
	} as Record<string, string>;
}

/** *
 * A wrapper for the [fetch] native method, that simplifies usage.
 */
export const fetchWrapper = {
	get: request('GET'),
	patch: request('PATCH'),
	post: request('POST'),
	put: request('PUT'),
	delete: request('DELETE')
};

/** *
 * Proxies the received request to backend api.
 * @param req the initial request.
 * @param res the route response.
 * @param method the fetch method that should be used.
 * @param path the api request path.
 * @param getRequestData a lambda that returns the data that should be sent.
 * @param isFile true if it's a file download.
 * If it's not defined [req.body] will be used as data.
 */
export async function proxyRequest(
	req: NextApiRequest,
	res: NextApiResponse,
	method: ReturnType<typeof request>,
	path: string,
	// eslint-disable-next-line no-unused-vars
	getRequestData?: (req: NextApiRequest) => any,
	isFile = false
) {
	let data;

	if (typeof getRequestData === 'function') {
		data = getRequestData(req);
	} else if (req.method === 'GET') {
		data = req.query;
	} else {
		data = req.body;
	}

	const response = await method(path, req.headers, data);

	response.headers.forEach((value, key) => {
		if (key.toLowerCase().startsWith('content') && key.toLowerCase() !== 'content-encoding') {
			res.setHeader(key, value);
		}
	});

	console.log(`${req.method} ${response.url} ${response.status}`);

	if (isFile) {
		const body = await response.arrayBuffer();

		res.status(response.status).send(Buffer.from(body as any, 'binary'));
		return;
	}

	const body = await response.text();

	res.status(response.status).send(body);
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
