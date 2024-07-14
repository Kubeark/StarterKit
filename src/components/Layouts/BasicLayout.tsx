import { Layout } from 'antd';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';
import { useRecoilState } from 'recoil';

import styled from 'styled-components';
import { menuCollapsed } from '@/recoil/atoms/menu';
import AsideMenu from './components/AsideMenu';
import styles from './styles/BasicLayout.module.scss';
import HeaderLayout from '@/components/Layouts/components/Header';
import { themeAtom } from '@/recoil/atoms/themeState';
import { lightTheme } from '@/ui/config';

const { Content } = Layout;

interface IBasicLayoutProps {
	noArrow?: boolean;
	children: ReactNode;
}

const BasicLayout = React.memo((props: IBasicLayoutProps) => {
	const [theme, setTheme] = useRecoilState(themeAtom);
	const [isCollapsedState, setCollapsedState] = useRecoilState(menuCollapsed);
	const router = useRouter();
	let getPath = router.asPath.replace('/', '');

	if (router.asPath === '/') {
		getPath = 'dashboard';
	}

	const handleToggleMode = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};

	const StyleLayout = styled(Layout)`
		position: relative;
		padding: calc(${lightTheme.token.controlHeight}px * 2) 24px 0;

		.ant-breadcrumb {
			ol {
				justify-content: end;
			}
		}

		@media screen and (max-width: 768px) {
			margin-left: 0;
		}
	`;

	return (
		<Layout className={styles.layout}>
			<AsideMenu getPath={getPath} isCollapsed={isCollapsedState} theme={theme} />
			<Layout className={`${styles['site-layout']} ${isCollapsedState ? styles.collapsed : styles.expanded}`}>
				<HeaderLayout
					theme={theme}
					handleToggleMode={handleToggleMode}
					isCollapsedState={isCollapsedState}
					setCollapsedState={setCollapsedState}
				/>

				<StyleLayout id="antLayoutContent">
					<Content className={`${styles['site-layout-bg']}  ${props.noArrow ? styles.noArrow : ''} site-layout-background`}>
						{props.children}
					</Content>
				</StyleLayout>
			</Layout>
		</Layout>
	);
});

export default BasicLayout;
