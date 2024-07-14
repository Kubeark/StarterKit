import React from 'react';
import { Badge, Button, Col, Input } from 'antd';
import { Header } from 'antd/es/layout/layout';
import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSearch } from '@fortawesome/pro-duotone-svg-icons';
import { faChevronLeft, faChevronRight, faSun } from '@fortawesome/pro-solid-svg-icons';
import styles from '../styles/BasicLayout.module.scss';
import profileImage from '../../../../public/media/avatar-1.jpg';

const StyleHeader = styled(Header)<{ isCollapsedState: boolean }>`
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

const RowHeader = styled.div`
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

const HeaderContainer = styled.ul`
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

const StyledCollapsedButton = styled(Button)`
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
const StyleHeaderSearchBar = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	width: 100%;
	margin-left: 10px;
`;

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
