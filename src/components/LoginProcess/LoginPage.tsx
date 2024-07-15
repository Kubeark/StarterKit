import { Spin, message, Layout, Row, Card, Col, Form, Input, Button, Space, Checkbox, Typography } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { ValidateErrorEntity } from 'rc-field-form/es/interface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLockHashtag, faUser } from '@fortawesome/pro-thin-svg-icons';
import { useUserActions } from '@/api/auth';
import { getErrorMessage } from '@/helpers/getErrorMsg';
import useCustomStyles from '@/ui/CustomStyles';
import ParticleAuth from '@/components/LoginProcess/ParticleAuth';
import { IFormLoginValues } from '@/models/auth';
import { LoginRow, StyleWrapper } from '@/ui/GlobalStyles/LoginPage';

const customStyles = useCustomStyles();
const { Footer } = Layout;
const { Title } = Typography;

function LoginPage() {
	const userActions = useUserActions();
	const router = useRouter();

	console.log('LoginPage');

	// async function login() {
	// 	try {
	// 		const shouldAutoLogin = !localStorage.getItem('ka-logout');
	// 		if (shouldAutoLogin) {
	// 			const user = await userActions.login();
	// 			if (user.data.authorization_url) {
	// 				await router.push(user.data.authorization_url);
	// 			}
	// 		}
	// 	} catch (error) {
	// 		message.error(getErrorMessage(error));
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// }

	// useEffect(() => {
	// 	login()
	// 		.then(() => setIsLoading(false))
	// 		.catch((err) => message.error(getErrorMessage(err)));
	// }, []);

	function onSubmit({ username, password }: IFormLoginValues) {
		// userActions.login(username, password)
		// 	.then(user => {
		// 		setAuth(user);
		//
		// 		return null;
		// 	})
		// 	.catch(error => {
		// 		message.error(getErrorMessage(error));
		// 	});
		console.log(username, password);
	}

	const onFinishFailed = (errorInfo: ValidateErrorEntity<IFormLoginValues>) => {
		message.error(getErrorMessage(errorInfo));

		console.log('Failed:', errorInfo);
		return;
	};

	return (
		<StyleWrapper className="auth-page-wrapper">
			<LoginRow justify="center" align="middle" style={{ minHeight: '100vh' }}>
				<Col xs={24} lg={14}>
					<Card>
						<Row gutter={[16, 24]}>
							<ParticleAuth />
							<Col xs={24} lg={12}>
								<div style={{ border: '0px' }}>
									<div className="text-center" style={{ margin: '20px' }}>
										<h5 style={{ fontSize: '20px', color: customStyles.colorPrimary }}>Bine ai venit!</h5>
										<p>Logheazate pentru a te putea loga in sistemul Interdict.</p>
									</div>
									<div style={{ marginTop: '30px', padding: '40px' }}>
										<Form
											name="normal_login"
											className="login-form"
											onFinish={onSubmit}
											layout="vertical"
											labelCol={{ span: 8 }}
											wrapperCol={{ span: 24 }}
											initialValues={{ remember: true }}
											onFinishFailed={onFinishFailed}
											autoComplete="off"
										>
											<Title className="title">Login Page</Title>
											<Form.Item
												label="Username"
												name="username"
												rules={[
													{
														required: true,
														message: 'Please input your Username!'
													}
												]}
											>
												<Input prefix={<FontAwesomeIcon icon={faUser} />} placeholder="Username" />
											</Form.Item>
											<Form.Item
												label="Password"
												name="password"
												rules={[
													{
														required: true,
														message: 'Please input your Password!'
													}
												]}
											>
												<Input
													prefix={<FontAwesomeIcon icon={faLockHashtag} />}
													type="password"
													placeholder="Password"
												/>
											</Form.Item>
											<Form.Item>
												<Form.Item name="remember" valuePropName="checked">
													<Checkbox>Remember me</Checkbox>
												</Form.Item>
											</Form.Item>

											<Form.Item>
												<Space size="large">
													<Button type="primary" htmlType="submit">
														Log in
													</Button>
												</Space>
											</Form.Item>
										</Form>
										{/* <Form */}
										{/*	onSubmit={(e) => { */}
										{/*		e.preventDefault(); */}
										{/*		validation.handleSubmit(); */}
										{/*		return false; */}
										{/*	}} */}
										{/* > */}
										{/*	<div> */}
										{/*		<label style={{ display: 'block', marginBottom: '4px' }}>Username</label> */}
										{/*		<Input */}
										{/*			name="email" */}
										{/*			style={{ margin: '10px 0px', boxShadow: 'none', outline: 'none' }} */}
										{/*			type="email" */}
										{/*			value={validation.values.email || ''} */}
										{/*			onChange={validation.handleChange} */}
										{/*			onBlur={validation.handleBlur} */}
										{/*			onInvalid={ */}
										{/*				validation.touched.email && validation.errors.email */}
										{/*					? validation.touched.email */}
										{/*					: undefined */}
										{/*			} */}
										{/*			status={validation.touched.email && validation.errors.email ? 'error' : true} */}
										{/*		/> */}
										{/*		{validation.touched.email && validation.errors.email && ( */}
										{/*			<p style={{ color: customStyles.colorDanger }}>{validation.errors.email}</p> */}
										{/*		)} */}
										{/*	</div> */}
										{/*	<div> */}
										{/*		<div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
										{/*			<label style={{ display: 'block', marginBottom: '4px' }}>Password</label> */}
										{/*		</div> */}
										{/*		<Input.Password */}
										{/*			name="password" */}
										{/*			value={validation.values.password || ''} */}
										{/*			onChange={validation.handleChange} */}
										{/*			style={{ boxShadow: 'none', outline: 'none' }} */}
										{/*			onBlur={validation.handleBlur} */}
										{/*			onInvalid={ */}
										{/*				validation.touched.password && validation.errors.password */}
										{/*					? validation.touched.password */}
										{/*					: undefined */}
										{/*			} */}
										{/*			status={validation.touched.password && validation.errors.password ? 'error' : true} */}
										{/*		/> */}
										{/*		{validation.touched.password && validation.errors.password && ( */}
										{/*			<p style={{ color: customStyles.colorDanger }}>{validation.errors.password}</p> */}
										{/*		)} */}
										{/*	</div> */}

										{/*	<Form.Item> */}
										{/*		<Form.Item name="remember" valuePropName="checked" noStyle> */}
										{/*			<Checkbox style={{ marginTop: '10px' }}>Remember me</Checkbox> */}
										{/*		</Form.Item> */}
										{/*	</Form.Item> */}
										{/*	<div> */}
										{/*		<Button */}
										{/*			htmlType="submit" */}
										{/*			type="primary" */}
										{/*			onClick={(e) => { */}
										{/*				e.preventDefault(); */}
										{/*				validation.handleSubmit(); */}
										{/*				return false; */}
										{/*			}} */}
										{/*			style={{ width: '100%' }} */}
										{/*			loading={isLoading} */}
										{/*		> */}
										{/*			{' '} */}
										{/*			Sign In */}
										{/*		</Button> */}
										{/*	</div> */}
										{/* </Form> */}
									</div>
								</div>
							</Col>
						</Row>
					</Card>
				</Col>
			</LoginRow>
			<Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Kubeark</Footer>
		</StyleWrapper>
	);
}

export default LoginPage;
