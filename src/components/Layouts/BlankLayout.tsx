import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import Image from 'next/image';
import React, { ReactNode } from 'react';

import styles from './styles/BlankLayout.module.scss';

// const Layout: React.FC = ({ children }) => <>{children}</>;
interface ILayoutProps {
	background: string;
	blur: boolean;
	children: ReactNode;
}

const BlankLayout = React.memo((props: ILayoutProps) => {
	return (
		<Layout className={styles.layout}>
			<div className={styles.bgWrap}>
				<Image
					alt="Background"
					src={props.background}
					quality={100}
					className={props.blur ? styles.blur : ''}
					fill
					sizes="100vw"
					style={{
						objectFit: 'cover'
					}}
				/>
			</div>
			<Content>{props.children}</Content>
		</Layout>
	);
});

export default BlankLayout;
