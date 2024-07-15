import React from 'react';
import { Badge, Button, Col, Input } from 'antd';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSearch } from '@fortawesome/pro-duotone-svg-icons';
import { faChevronLeft, faChevronRight, faSun } from '@fortawesome/pro-solid-svg-icons';
import styles from '../styles/BasicLayout.module.scss';
import profileImage from '../../../../public/media/avatar-1.jpg';
import { HeaderContainer, RowHeader, StyledCollapsedButton, StyleHeader, StyleHeaderSearchBar } from '@/ui/GlobalStyles/Header';

interface IHeaderLayoutProps {
	theme: string;
	handleToggleMode: () => void;
	setCollapsedState: (value: boolean) => void;
	isCollapsedState: boolean;
}

const HeaderLayout = ({ theme, handleToggleMode, isCollapsedState, setCollapsedState }: IHeaderLayoutProps) => {
	return (
		<StyleHeader isCollapsedState={isCollapsedState}>
			<RowHeader>
				<StyledCollapsedButton
					type="link"
					onClick={() => {
						setCollapsedState(!isCollapsedState);
					}}
				>
					{isCollapsedState ? <FontAwesomeIcon icon={faChevronRight} /> : <FontAwesomeIcon icon={faChevronLeft} />}
				</StyledCollapsedButton>
				<Col span={5} lg={5}>
					<StyleHeaderSearchBar>
						<FontAwesomeIcon icon={faSearch} />
						<Input placeholder="Quick Search" />
					</StyleHeaderSearchBar>
				</Col>
				<Col span={11} lg={8} className="a">
					<HeaderContainer className="ant-topbar-head">
						<li>
							<Button type="link" onClick={handleToggleMode} className={styles.btnTheme}>
								{theme === 'dark' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
							</Button>
						</li>
						<li>
							<Badge dot offset={[-3, 5]}>
								<img src={profileImage} alt="Profile" height={36} style={{ borderRadius: '50%' }} />
							</Badge>
						</li>
					</HeaderContainer>
				</Col>
			</RowHeader>
		</StyleHeader>
	);
};

export default HeaderLayout;
