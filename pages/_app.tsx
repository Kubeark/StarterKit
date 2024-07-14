import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import utc from 'dayjs/plugin/utc';
import { AppProps } from 'next/app';
import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { hijackEffects } from 'stop-runaway-react-effects';

import 'antd/dist/reset.css';
import '../styles/tailwind.css';
import '../styles/config.scss';

dayjs.extend(duration);
dayjs.extend(utc);

const { publicRuntimeConfig } = getConfig();

type SafeHydrateProps = {
	children: ReactNode;
};

if (process.env.NODE_ENV === 'development') {
	hijackEffects({ callCount: 500, timeLimit: 1000 });
}

function SafeHydrate({ children }: SafeHydrateProps) {
	return <div suppressHydrationWarning={true}>{typeof window === 'undefined' ? null : children}</div>;
}

// eslint-disable-next-line
const consoleError = console.error.bind(console);
function MyApp({ Component, pageProps, router }: AppProps) {
	// eslint-disable-next-line
	console.error = (errObj, ...args) => {
		if (process.env.NODE_ENV === 'development' && typeof errObj.message === 'string' && args.includes('findDOMNode')) {
			return;
		}
		consoleError(errObj, ...args);
	};

	console.log('App rendered', publicRuntimeConfig?.version);
	const Page = dynamic(() => import('@/Page/PageInitializeComponent'), { ssr: false });

	return (
		<RecoilRoot>
			<Head>
				<title>Dashboard</title>
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<SafeHydrate>
				<Page Component={Component} pageProps={pageProps} router={router} />
			</SafeHydrate>
		</RecoilRoot>
	);
}

export default MyApp;
