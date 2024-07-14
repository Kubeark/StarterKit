export interface Theme {
	mode: Themes;
}

export type Themes = 'light' | 'dark';

export interface ThemeType {
	readonly activeText: string;
	readonly text: string;
}
