import { atom } from 'recoil';

export const errorAtom = atom<string>({
	key: 'error', // get initial state from local storage to enable user to stay logged in
	default: ''
});
