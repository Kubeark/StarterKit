import { atom } from 'recoil';

import { IUser } from '@/models/usersData';

export const userAtom = atom<IUser | null>({
	key: 'user',
	default: null
});

export const usersDataAtom = atom<IUser[]>({
	key: 'users',
	default: []
});
