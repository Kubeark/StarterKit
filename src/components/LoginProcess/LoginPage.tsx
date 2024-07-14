import { Spin, message, Layout } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { useUserActions } from '@/api/auth';
import { getErrorMessage } from '@/helpers/getErrorMsg';

const { Content, Footer } = Layout;

function LoginPage() {
	const userActions = useUserActions();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	async function login() {
		try {
			const shouldAutoLogin = !localStorage.getItem('ka-logout');
			if (shouldAutoLogin) {
				const user = await userActions.login();
				if (user.data.authorization_url) {
					await router.push(user.data.authorization_url);
				}
			}
		} catch (error) {
			message.error(getErrorMessage(error));
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		login()
			.then(() => setIsLoading(false))
			.catch((err) => message.error(getErrorMessage(err)));
	}, []);

	if (isLoading) {
		return <Spin />;
	}

	return (
		<Layout>
			<Content style={{ padding: '0 48px' }} />
			<Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
		</Layout>
	);
}

export default React.memo(LoginPage);
