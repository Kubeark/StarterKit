import styled, { css } from 'styled-components';
import { Col, Row } from 'antd';
import useCustomStyles from '@/ui/CustomStyles';

const customStyles = useCustomStyles();

export const StyleWrapper = styled.div`
	background-color: ${({ theme }) => theme.token.authbgcolor};
`;
export const LoginRow = styled(Row)`
	min-height: 100vh;
`;

export const StyleHeaderSearchBar = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	margin-left: 10px;
`;

export const StyleAuthLayout = styled(Col)`
	background-color: ${() => customStyles.colorPrimary};
	color: ${() => customStyles.colorBgContainer};
	border-radius: 6px;
`;
export const StyleAuthWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	justify-content: space-between;
	height: 100%;
`;

export const StyleAuthImg1 = styled.img`
	position: absolute;
	top: 0;
	right: 0;
	transform: rotate(-45deg);
	z-index: 1;
`;

export const StyleAuthImg2 = styled.img`
	position: absolute;
	top: -15px;
	left: -20px;
	z-index: 1;
	overflow: hidden;
`;

export const StyleAuthImg3 = styled.img`
	position: absolute;
	bottom: -15px;
	right: -20px;
	z-index: 1;
`;

export const LoginPageStyles = css`
	.login-form {
		width: 100%;
		padding: 40px;

		p {
			margin-bottom: 30px;

			&.form-title {
				color: #333;
				font-family: 'Josefin Sans', sans-serif;
				font-size: 42px;
				font-weight: bold;
				line-height: 1;
				margin-bottom: 0;
			}
		}

		.title {
			margin-top: 60px;
			text-align: center;
			margin-bottom: 60px !important;
			color: $primary-color !important;
			font-size: $title;
		}
	}
`;
