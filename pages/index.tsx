import React from 'react';

import Head from 'next/head';
import BasicLayout from '../src/components/Layouts/BasicLayout';
import Dashboard from '@/components/Dashboard/Dashboard';

function FirstPage() {
	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>

			<BasicLayout>
				<Dashboard />
			</BasicLayout>
		</>
	);
}

export default React.memo(FirstPage);
