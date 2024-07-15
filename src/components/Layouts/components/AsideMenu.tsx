import { faGridHorizontal, faUsers } from '@fortawesome/pro-duotone-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Menu, MenuProps } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import BrandLogo from '../../../../public/media/logo-dark.png';
import BrandLightLogo from '../../../../public/media/logo-light.png';
import BrandSmLogo from '../../../../public/media/logo-sm.png';

import { usePermissions } from '@/recoil/selectors/permissionSelector';
import {LayoutAsideMenu, StyleSider} from "@/ui/GlobalStyles/Menu";

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
				<div className="section-wrapper">
					<span className="aside-title">Dashboard</span>
				</div>
			),
			className: 'category',
			children: [
				{
					key: 'dashboard',
					title: 'Dashboard',
					label: 'Dashboard',
					icon: <FontAwesomeIcon icon={faGridHorizontal} className="aside-icon" title="dashboard" />,
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
				<div className="section-wrapper">
					<span className="aside-title">User Management</span>
				</div>
			),
			className: 'category',
			children: [
				{
					key: 'users',
					title: 'Users',
					label: 'Users',
					style: useHandlePermissions('global_admin', undefined),
					icon: <FontAwesomeIcon icon={faUsers} className="aside-icon" title="users" />,
					onClick: () =>
						router.push({ pathname: '/users' }, undefined, {
							shallow: true
						})
				}
			]
		}
	];

	return (
		<LayoutAsideMenu>
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
		</LayoutAsideMenu>
	);
};

export default AsideMenu;
