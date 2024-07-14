import { DefaultTheme } from 'styled-components';

import { Themes } from '../../models/themes';
import { darkTheme, defaultTheme } from '../../ui/theme';

// export const themeSelector = selector({
//     key: THEME_SELECTOR,
//     get: ({ get }) => {
//         const currentTheme = get(themeNameState);
//
//         return getTheme(currentTheme.themeState) as DefaultTheme
//     }
// });

export function getTheme(client: Themes): DefaultTheme {
	switch (client) {
		case Themes.Dark:
			return darkTheme;
		case Themes.Default:
		default:
			return defaultTheme;
	}
}
