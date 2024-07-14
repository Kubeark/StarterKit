import Cookies from 'js-cookie';
import { AtomEffect, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

import { IAuth } from '@/models/auth';

const { persistAtom } = recoilPersist();

const rememberAuthEffect: AtomEffect<any> = ({ getPromise, node, onSet, setSelf, trigger }) => {
	if (typeof window === 'undefined') {
		return;
	}

	if (trigger === 'get') {
		const savedState = Cookies.get(node.key);

		if (savedState) {
			try {
				const authValue = JSON.parse(savedState);

				setSelf(authValue);
			} catch (e) {
				console.error(e);
			}
		}
	}

	// Subscribe to state changes and persist them to localForage
	onSet((newValue, _, isReset) => {
		const opt: Cookies.CookieAttributes = { sameSite: 'strict' };

		if (isReset) {
			Cookies.remove(node.key);

			return;
		}

		getPromise(rememberAuthAtom)
			.then((remember) => {
				if (remember) {
					// save cookie for 7 days
					opt.expires = 7;
				}

				Cookies.set(node.key, JSON.stringify(newValue), opt);

				return;
			})
			.catch((err) => console.error(err));
	});
};

export const authAtom = atom<IAuth | null>({
	key: 'auth',
	// get initial state from local storage to enable user to stay logged in
	default: null,
	effects_UNSTABLE: [rememberAuthEffect]
});

export const rememberAuthAtom = atom<boolean>({
	key: 'remember_auth',
	default: true
});

export const authorizedAtom = atom<boolean>({
	key: 'authorized',
	default: false
});

export const versionApp = atom<number | undefined>({
	key: 'version_app',
	default: undefined,
	effects_UNSTABLE: [persistAtom]
});
