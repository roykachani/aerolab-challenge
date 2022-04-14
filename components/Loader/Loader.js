import Image from 'next/image';

import logocoins from '../../assets/icons/aeropay-1.svg';

import styles from './styles.module.css';

const Loader = () => {
	return (
		<>
			<div className={styles.main_container_loading}>
				<span className={styles.loading_text}>...Loading</span>
				<Image
					src={logocoins}
					width={24}
					height={24}
					loading="eager"
					priority
					className={styles.logo_loader}
				/>
			</div>
		</>
	);
};

export default Loader;
