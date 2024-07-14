import { faExclamation } from '@fortawesome/pro-duotone-svg-icons';
import { faCheck, faExclamationTriangle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from './styles/Loading.module.scss';

interface ILoadingSpinnerProps {
	size: 'small' | 'large' | 'default';
	spinning: boolean;
	success?: boolean;
	warning?: boolean;
	error?: boolean;
	text?: string;
	textWhite?: boolean;
}

function LoadingSpinner(props: ILoadingSpinnerProps) {
	return (
		<div className={styles['loading-spinner']}>
			<div className={`${styles.loading} ${props.text ? styles.hasText : ''}`}>
				{(props.success && <FontAwesomeIcon icon={faCheck} className={`${styles.success} ${styles.icon}`} size="5x" />) ||
					(props.warning && <FontAwesomeIcon icon={faExclamation} className={`${styles.warning} ${styles.icon}`} size="3x" />) ||
					(props.error && <FontAwesomeIcon icon={faExclamationTriangle} className={`${styles.error} ${styles.icon}`} size="3x" />) || (
						<div className={`${styles.loader} ${styles[props.size]}`}>
							<div className={`${styles.inner} ${styles.one}`} />
							<div className={`${styles.inner} ${styles.two}`} />
							<div className={`${styles.inner} ${styles.three}`} />
						</div>
					)}
				{props.text && <div className={`${styles.text} ${props.textWhite ? styles.white : ''}`}>{props.text}</div>}
			</div>
		</div>
	);
}

export default React.memo(LoadingSpinner);
