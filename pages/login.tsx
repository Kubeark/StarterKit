import React from 'react';

import loginBg from '../public/media/img/bg_guetzli.jpg';
import BlankLayout from '../src/components/Layouts/BlankLayout';
import LoginPage from '../src/components/LoginProcess/LoginPage';

function Login() {
	return (
		<BlankLayout background={loginBg} blur={false}>
			<LoginPage />
		</BlankLayout>
	);
}

export default React.memo(Login);
