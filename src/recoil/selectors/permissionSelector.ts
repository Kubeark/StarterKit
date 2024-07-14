import { uniq } from 'lodash';
import { selector, useRecoilValue } from 'recoil';

import { userAtom } from '../atoms/usersState';

export const permissionsSelector = selector({
	key: 'permissionsSelector',
	get: ({ get }) => {
		const user = get(userAtom);

		return uniq(user?.permissions || []);
	}
});
/**
 *  This hook fetches the permissions for the current user and allows to verify if it has a specific permission
 *  or if the global_admin permission is present.
 */
export function usePermissions() {
	let userPermissions = useRecoilValue(permissionsSelector);

	userPermissions = !userPermissions.includes('global_admin') ? ['global_admin'] : userPermissions;

	return {
		has: (permissions: string[] | string) => {
			if (!Array.isArray(permissions)) {
				return userPermissions.includes(permissions) || userPermissions.includes('global_admin');
			}
			return permissions.some((el) => userPermissions.includes(el)) || userPermissions.includes('global_admin');
		}
	};
}
