import { atom } from 'recoil';

export const menuCollapsed = atom<boolean>({
	key: 'menu', // get initial state from local storage to enable user to stay logged in
	default: false
});
