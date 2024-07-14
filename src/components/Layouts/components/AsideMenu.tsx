import { faGridHorizontal, faUsers } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Layout, Menu, MenuProps } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import BrandLogo from '../../../../public/media/logo-dark.png';
import BrandLightLogo from '../../../../public/media/logo-light.png';
import BrandSmLogo from '../../../../public/media/logo-sm.png';

import styles from '../styles/AsideMenu.module.scss';
import { usePermissions } from '@/recoil/selectors/permissionSelector';

const { Sider } = Layout;

function getPathName(path: string) {
	const segments = path.split('/'); // Remove empty segments

	console.log(segments);

	switch (segments[0]) {
		case 'analytics':
			return 'dashboard';
		default:
			return segments[0];
	}
}

function getOpenPathCategory(path: string) {
	switch (path.split('/')[0]) {
		default:
			return path.split('/')[0];
	}
}

function useHandlePermissions(permissionList: string[] | string | undefined, isMainCategory = false) {
	const permissions = usePermissions();

	if (permissionList) {
		return permissions.has(permissionList) ? { display: isMainCategory ? 'list-item' : 'block' } : { display: 'none' };
	}

	return { display: 'block' };
}

interface IAsideMenuProps {
	getPath: string;
	isCollapsed: boolean;
	theme: string;
}

const AsideMenu = (props: IAsideMenuProps) => {
	const router = useRouter();

	type MenuItem = Required<MenuProps>['items'][number];

	const items: MenuItem[] = [
		{
			type: 'group',
			style: useHandlePermissions(['global_admin']),
			label: (
				<div className={styles['section-wrapper']}>
					<span className={styles.title}>Dashboard</span>
				</div>
			),
			className: styles.category,
			children: [
				{
					key: 'dashboard',
					title: 'Dashboard',
					label: 'Dashboard',
					icon: <FontAwesomeIcon icon={faGridHorizontal} className={styles.icon} title="dashboard" />,
					onClick: () =>
						router.push({ pathname: '/' }, undefined, {
							shallow: true
						})
				}
			]
		},
		{
			type: 'divider',
			style: useHandlePermissions('global_admin'),
			className: 'divider',
			dashed: true
		},
		{
			type: 'group',
			style: useHandlePermissions(['global_admin'], true),
			label: (
				<div className={styles['section-wrapper']}>
					<span title="User Management" className={styles.title}>
						User Management
					</span>
				</div>
			),
			className: styles.category,
			children: [
				{
					key: 'users',
					title: 'Users',
					label: 'Users',
					style: useHandlePermissions('global_admin', undefined),
					icon: <FontAwesomeIcon icon={faUsers} className={styles.icon} title="users" />,
					onClick: () =>
						router.push({ pathname: '/users' }, undefined, {
							shallow: true
						})
				}
			]
		}
	];
	const StyleSider = styled(Sider)`
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		z-index: 1000;
		border-right: 1px solid ${({ theme }) => theme.components.Menu.menuBorderColor};
		background: ${({ theme }) => theme.components.Menu.itemBg} !important;
	`;

	return (
		<div className={`${styles.layout}`}>
			<StyleSider trigger={null} collapsible width={props.isCollapsed ? 100 : 280} collapsed={props.isCollapsed} collapsedWidth="100">
				<div className={`${props.isCollapsed ? 'sider-collapsed' : ''} logo ant-mx-auto`}>
					<img
						alt="Brand logo"
						src={props.theme === 'light' ? BrandLogo : BrandLightLogo}
						width={180}
						style={{ lineHeight: '24px' }}
						className="brand-dark-logo ant-mx-auto"
					/>
					<img
						alt="Brand sm logo"
						src={BrandSmLogo}
						width={50}
						style={{ lineHeight: '24px' }}
						className="brand-sm-logo ant-mx-auto"
					/>
				</div>
				<Menu
					theme="light"
					mode="inline"
					defaultSelectedKeys={[getPathName(props.getPath)]}
					defaultOpenKeys={props.isCollapsed ? [] : [getOpenPathCategory(props.getPath)]}
					items={items}
				/>
			</StyleSider>
		</div>
	);
};

export default AsideMenu;
