import React from 'react';

import { HeartFilled } from '@ant-design/icons';
import logoLightFull from '../../../public/media/logo-light.png';
import authEffect2 from '../../../public/media/img/effect-pattern/auth-effect-2.png';
import authEffect from '../../../public/media/img/effect-pattern/auth-effect.png';
import useCustomStyles from '@/ui/CustomStyles';
import { StyleAuthImg1, StyleAuthImg2, StyleAuthImg3, StyleAuthLayout, StyleAuthWrapper } from '@/ui/GlobalStyles/LoginPage';

const customStyles = useCustomStyles();

const ParticleAuth = () => {
	return (
		<StyleAuthLayout xs={24} lg={12}>
			<StyleAuthWrapper>
				<div style={{ marginBottom: '30px' }}>
					<img src={logoLightFull} alt="" height="30" />
					<StyleAuthImg1 src={authEffect2} alt="" />
					<StyleAuthImg2 src={authEffect} alt="" />
					<StyleAuthImg3 src={authEffect} alt="" />
				</div>

				<div>
					<h3 style={{fontSize: '22px', fontWeight: 'bold'}}>Start your journey with us.</h3>
					<p>It brings together your tasks, projects, timelines, files, and more</p>
				</div>
				<div className="text-center text-white-75">
					<p style={{marginBottom: '0px'}}>
						&copy; {new Date().getFullYear()} Company. Crafted with <HeartFilled style={{color: customStyles.colorDanger}}/>{' '}
						by Kubeark
					</p>
				</div>
			</StyleAuthWrapper>
		</StyleAuthLayout>);
};

export default ParticleAuth;
