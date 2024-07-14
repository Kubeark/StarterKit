import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Typewriter from 'typewriter-effect';

import bgImg from '../public/media/img/bg_guetzli.jpg';
import styles from '../styles/layout/notfound.module.scss';

const Custom404 = () => {
	return (
		<div className={styles.container}>
			<div className={styles['illustration-wrapper']}>
				<Image src={bgImg} alt="Bg" blurDataURL={bgImg} fill sizes="100vw" />
			</div>
			<div className={styles.title}>
				HTTP: <span>404</span>
			</div>

			<div className={styles.code}>
				<code>
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString('<span>this_page</span>.<em>not_found</em> = true;')
								.pauseFor(250)
								.typeString('<br /><br /><span>if</span> (<b>you_spelt_it_wrong</b>)\n { <span>try_again()</span> }')
								.pauseFor(250)
								.typeString(
									'<br /><br /><span>else if (<b>we_messed_up</b>)</span> {<em>alert</em>} (<i>"We\'re really sorry about that."</i>) <span>window</span>.<em>location</em> = home;'
								)
								.pauseFor(1000)
								.start();
						}}
						options={{
							autoStart: true,
							delay: 60,
							loop: false
						}}
					/>
				</code>
			</div>

			<span className={styles.home}>
				<Link href="/">Home</Link>
			</span>
		</div>
	);
};
export default Custom404;
