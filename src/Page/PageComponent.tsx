import { ConfigProvider } from 'antd';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/ui/globalStyles';

import { authAtom, authorizedAtom } from '@/recoil/atoms/authState';
import LoginPage from '@/components/LoginProcess/LoginPage';
import { useTheme } from '@/ui/ThemeContext';
import { darkTheme, lightTheme } from '@/ui/config';

function Page({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const auth = useRecoilValue(authAtom);
	const [authorized, setAuthorized] = useRecoilState(authorizedAtom);
	// const user = useRecoilValue(userAtom);
	// const userActions = useUserActions();
	const isAuthenticated = auth && auth.access_token;

	const { theme } = useTheme();

	const currentTheme: any = theme === 'light' ? lightTheme : darkTheme;

	useEffect(() => {
		// run auth check on initial load
		authCheck(router.asPath);

		// set authorized to false to hide page content while changing routes
		const hideContent = () => setAuthorized(false);
		router.events.on('routeChangeStart', hideContent);

		// run auth check on route change
		router.events.on('routeChangeComplete', authCheck);

		// unsubscribe from events in useEffect return function
		return () => {
			router.events.off('routeChangeStart', hideContent);
			router.events.off('routeChangeComplete', authCheck);
		};
	}, []);

	useEffect(() => {
		if (!isAuthenticated) {
			return;
		}
	}, [isAuthenticated]);

	useEffect(() => {
		// Called when the atom value changes
		if (!isAuthenticated) {
			authCheck(router.asPath);
		}
	}, [auth]);

	function authCheck(url: string) {
		// redirect to login page if accessing a private page and not logged in
		const publicPaths = ['/login'];
		const path = url.split('?')[0];

		if (!isAuthenticated && !publicPaths.includes(path)) {
			setAuthorized(false);
			router.push({
				pathname: '/login',
				query: { returnUrl: router.asPath }
			});
			// } else if (!!isAuthenticated && !user) {
			// userActions
			// 	.getUser()
			// 	.then(() => {
			// 		setAuthorized(true);
			// 		return;
			// 	})
			// 	.catch((err) => {
			// 		message.error(getErrorMessage(err));
			// 	});
		} else {
			setAuthorized(true);
		}
	}

	return (
		<StyledThemeProvider theme={currentTheme}>
			<GlobalStyles theme={currentTheme} />
			<ConfigProvider theme={currentTheme}>{authorized ? <Component {...pageProps} /> : <LoginPage />}</ConfigProvider>
		</StyledThemeProvider>
	);
}

export default React.memo(Page);
