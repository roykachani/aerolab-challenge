import Image from 'next/image';

import wave from '../../assets/illustrations/single-wave-pattern.svg';
import styles from './styles.module.css';

const WavePattern = () => {
	return (
		<>
			<div className={styles.wavePattern_container} style={{ top: '531px' }}>
				<div className={styles.wavePatternA}></div>
				<div className={styles.wavePatternB}></div>
			</div>
			<div className={styles.wavePattern_container} style={{ top: '201px' }}>
				<div className={styles.wavePatternA}></div>
				<div className={styles.wavePatternB}></div>
			</div>
			<div className={styles.wavePattern_container} style={{ top: '862px' }}>
				<div className={styles.wavePatternA}></div>
				<div className={styles.wavePatternB}></div>
			</div>
			<div className={styles.wavePattern_container} style={{ top: '1192px' }}>
				<div className={styles.wavePatternA}></div>
				<div className={styles.wavePatternB}></div>
			</div>
		</>
	);
};

export default WavePattern;
