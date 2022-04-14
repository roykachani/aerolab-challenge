import Link from 'next/link';

import styles from './styles.module.css';

const Footer = () => {
	return (
		<>
			<div className={styles.footer_container}>
				<Link
					className={styles.footer_link}
					href={'https://github.com/roykachani/aerolab-challenge'}
					passHref={true}
				>
					<div className={styles.footer_content}>
						<div className={styles.github_svg_active}></div>

						<span className={styles.footer_text}>View this repository</span>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Footer;
