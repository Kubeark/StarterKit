import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const themeAtom = atom<'light' | 'dark'>({
	key: 'themeAtom',
	default: 'dark',
	effects_UNSTABLE: [persistAtom]
});
