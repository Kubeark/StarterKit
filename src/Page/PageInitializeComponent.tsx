import { AppProps } from 'next/app';
import React from 'react';
import PageComponent from './PageComponent';
import { ThemeProvider } from '@/ui/ThemeContext';

function PageInitialize({ Component, pageProps, router }: AppProps) {
	return (
		<ThemeProvider>
			<PageComponent Component={Component} pageProps={pageProps} router={router} />
		</ThemeProvider>
	);
}

export default PageInitialize;
