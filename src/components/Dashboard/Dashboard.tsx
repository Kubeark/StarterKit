import React from 'react';
import { Card, Col, Layout, Row, Typography } from 'antd';
import { Content } from 'antd/es/layout/layout';
import useCustomStyles from '@/ui/CustomStyles';
import BreadcrumbCustom from '../BreadCrumb/BreadcrumbCustom';

const customStyles = useCustomStyles();

const { Text, Title } = Typography;

function Dashboard() {
	return (
		<>
			<BreadcrumbCustom mainTitle="Lizant" pageTitle="Dashboard" />
			<div>
				<Row gutter={[24, 24]}>
					<Col xs={24} xxl={19}>
						<div>
							<Row gutter={[24, 24]} style={{ marginTop: customStyles.margin }}>
								<Layout style={{ padding: '0 24px 24px' }}>
									<Content
										style={{
											padding: 24,
											margin: 0,
											minHeight: 280
										}}
									>
										<Card title="Title Component">
											<p style={{ marginBottom: customStyles.marginXS }}>
												<Text type="secondary">Display title in different level.</Text>
											</p>
											<div>
												<Title>h1. Ant Design</Title>
												<Title level={2}>h2. Ant Design</Title>
												<Title level={3}>h3. Ant Design</Title>
												<Title level={4}>h4. Ant Design</Title>
												<Title level={5}>h5. Ant Design</Title>
											</div>
										</Card>
									</Content>
								</Layout>
							</Row>
						</div>
					</Col>
				</Row>
			</div>
		</>
	);
}

export default Dashboard;
