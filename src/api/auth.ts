import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { useFetchWrapper } from '@/helpers/fetchWrapper';
import { IdPLogin } from '@/models/auth';
import { IResponseData } from '@/models/response';
import { IUser } from '@/models/usersData';
import { authAtom } from '@/recoil/atoms/authState';
import { userAtom } from '@/recoil/atoms/usersState';

export { useUserActions };

function useUserActions() {
	const router = useRouter();
	const fetchWrapper = useFetchWrapper();
	const setAuth = useSetRecoilState(authAtom);
	const [user, setUser] = useRecoilState(userAtom);

	return {
		login,
		logout,
		getUser
	};

	function login(): Promise<IdPLogin> {
		return fetchWrapper().post(`auth/login`, false);
	}

	async function logout() {
		try {
			await fetchWrapper().post(`auth/logout`, {}, false);
		} catch (e) {
			console.warn(e);
		}
		// remove user from local storage, set auth state to null and redirect to login page
		localStorage.setItem('ka-logout', 'true');
		localStorage.removeItem('recoil-persist');
		setAuth(null);
		setUser(null);
		await router.push('/login');
	}

	async function getUser(): Promise<IUser> {
		if (user) {
			return user;
		}

		const response: IUser = await fetchWrapper().get(`auth/profile`);

		setUser(response);

		return response;
	}

	async function updateUser(data: Partial<IUser>): Promise<IResponseData> {
		const response: IResponseData = await fetchWrapper().post(`auth/profile`, data, false);

		if (user) {
			const updatedUser = { ...user, ...data };

			setUser(updatedUser);
		}

		return response;
	}
}
