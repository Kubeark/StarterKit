import Image from 'next/image';
import React from 'react';
import Typewriter from 'typewriter-effect';

import bgImg from '../public/media/img/spikes.jpg';
import styles from '../styles/layout/notfound.module.scss';

const Custom500 = () => {
	return (
		<div className={`${styles.container} ${styles.err500}`}>
			<div className={styles['illustration-wrapper']}>
				<Image src={bgImg} alt="Bg" blurDataURL={bgImg} fill sizes="100vw" />
			</div>
			<div className={styles.title}>
				Server Error <span>500</span>
			</div>

			<div className={styles.code}>
				<code>
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString("<span>Ruh-roh, something just isn't right...</span>.<em>error</em> = true;")
								.pauseFor(250)
								.typeString("<br /><br /><span>It's always time for a coffee break.</span>\n")
								.pauseFor(100)
								.typeString('<br /><br />We should be back by the time you finish your coffee.')
								.start();
						}}
						options={{
							autoStart: true,
							delay: 50,
							loop: false
						}}
					/>
				</code>
			</div>
		</div>
	);
};
export default React.memo(Custom500);
