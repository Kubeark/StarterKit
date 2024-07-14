import React from 'react';

import Head from 'next/head';
import BasicLayout from '../../src/components/Layouts/BasicLayout';
import Users from '@/components/Users/Users';

function FirstPage() {
	return (
		<>
			<Head>
				<title>Users</title>
			</Head>
			<BasicLayout>
				<Users />
			</BasicLayout>
		</>
	);
}

export default React.memo(FirstPage);
