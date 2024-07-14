import { css } from 'styled-components';
import { lightTheme } from '@/ui/config';

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

	//  ----------------------------------------- end of Menu -----------------------------------------
`;
