import React, { createContext, ReactNode, useContext, useMemo } from 'react';
import { useRecoilState } from 'recoil';
import { themeAtom } from '@/recoil/atoms/themeState';
import { Themes } from '@/models/themes';

type ThemeContextType = {
	theme: Themes;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
	const context = useContext(ThemeContext);
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider');
	}
	return context;
};

type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = useRecoilState(themeAtom);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	const contextValue = useMemo(() => ({ theme, toggleTheme }), [theme]);

	return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
