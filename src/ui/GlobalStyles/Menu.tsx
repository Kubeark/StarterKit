import styled, { css } from 'styled-components';
import { Layout } from 'antd';
import { lightTheme } from '@/ui/config';

const { Sider } = Layout;

export const StyleSider = styled(Sider)`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	z-index: 1000;
	border-right: 1px solid ${({ theme }) => theme.components.Menu.menuBorderColor};
	background: ${({ theme }) => theme.components.Menu.itemBg} !important;
`;

export const LayoutAsideMenu = styled('div')`
	display: flex;
	position: fixed;
	height: 100vh;
	overflow-y: scroll;
	overflow-x: hidden;
	transition: all 0.2s ease-in-out 0s;
`;

export const MenuStyles = css`
	//  -------------- Menu ----------------

	.logo {
		background-color: ${({ theme }) => theme.components.Menu.itemBg};
		display: flex;
		align-items: center;
		height: calc(${lightTheme.token.controlHeight}px * 2);
		padding-inline: 14px;
		line-height: 81px;
		justify-content: center;

		.brand-sm-logo {
			display: none;
		}

		&.sider-collapsed {
			.brand-dark-logo {
				display: none;
			}

			.brand-sm-logo {
				display: inline-block;
			}

			.ant-menu-item-group-title {
				text-align: center;
			}
		}
	}

	.ant-menu-sub {
		.ant-menu-item {
			margin-top: 0;
			margin-bottom: 0;
		}
	}

	.ant-menu-inline {
		border-inline-end: none !important;
	}

	.ant-menu-inline-collapsed {
		width: 100px;
	}

	.icon {
		font-size: 20px;
	}
	.aside-title {
		font-size: 14px;
		font-weight: bold;
	}

	//  ----------------------------------------- end of Menu -----------------------------------------
`;
