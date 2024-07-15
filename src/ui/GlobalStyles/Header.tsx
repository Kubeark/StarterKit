import styled, { css } from 'styled-components';
import { Button, Layout } from 'antd';

const { Header } = Layout;

export const StyleHeader = styled(Header)<{ isCollapsedState: boolean }>`
	padding-inline: 24px;
	position: fixed;
	left: ${({ theme, isCollapsedState }) =>
		isCollapsedState ? `${theme.components.Menu.verticalCollapsedSidebarWidth}px` : `${theme.components.Menu.verticalSidebarWidth}px`};
	right: 0;
	top: 0;
	border-bottom: 1px solid;
	border-color: ${({ theme }) => theme.token.colorBorder};
	z-index: 999;
	background: ${({ theme }) => theme.components.Menu.itemBg};
`;

export const RowHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	row-gap: 24px;
	flex-flow: row wrap;
	min-width: 0;
	margin-left: -8px;
	margin-right: -8px;
`;

export const HeaderContainer = styled.ul`
	font-size: 15px;
	padding-inline: 0;
	display: flex;
	gap: 10px;
	margin: 0;
	justify-content: end;
	list-style: none;
	padding: 0;

	.ant-avatar {
		background-color: transparent;
		transition: all 0.5s ease;
		&:hover {
			background-color: ${({ theme }) => theme.token.colorBorder};
		}
	}
`;

export const StyledCollapsedButton = styled(Button)`
	height: 30px;
	width: 30px;
	padding: 2px;
	position: absolute;
	z-index: 999;
	background: ${({ theme }) => theme.components.Menu.itemBg};
	border: 1px solid;
	border-color: ${({ theme }) => theme.token.colorBorder};

	/* RTL Styles */
	${({ theme }) =>
		theme.direction === 'rtl' &&
		css`
			right: -14px;
		`}
	/* LTR Styles */
      ${({ theme }) =>
		theme.direction !== 'rtl' &&
		css`
        left: -14px;~
      `}
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
