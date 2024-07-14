import { Divider, Typography } from 'antd';
import React from 'react';

import BasicLayout from '../src/components/Layouts/BasicLayout';
import styles from '../styles/layout/structure.module.scss';

const { Title } = Typography;

function Under_construction() {
	return (
		<BasicLayout>
			<Title level={2} className={`${styles.title} title`}>
				Page under construction
			</Title>
			<div className={styles.center}>
				<Divider orientation="center" plain>
					Page under construction
				</Divider>
			</div>
		</BasicLayout>
	);
}

export default React.memo(Under_construction);
