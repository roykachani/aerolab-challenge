import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { UserContext } from '../../context/user';
import logo from '../../assets/icons/aerolab-logo-1.svg';
import logocoins from '../../assets/icons/aeropay-1.svg';
import chevrondef from '../../assets/icons/chevron-active.svg';

import styles from './styles.module.css';

const Navbar = ({ handleClick, isOpen }) => {
	const { userState } = useContext(UserContext);

	const handleModalCoins = () => {
		handleClick();
	};

	return (
		<div className={styles.nav_main_container}>
			<div className={styles.nav_container}>
				<Link href="/">
					<a>
						<Image
							src={logo}
							width={126}
							height={48}
							loading="eager"
							priority
						/>
					</a>
				</Link>
				<div className={styles.aeroCoins_container} onClick={handleModalCoins}>
					<div className={styles.aeroCoins_text}>
						<Image
							src={logocoins}
							width={24}
							height={24}
							loading="eager"
							priority
						/>
						<span className={styles.nav_coins_text}>
							{userState.user?.points ? userState.user?.points : '0000'}
						</span>
					</div>
					<div
						className={
							!!isOpen
								? `${styles.aeroCoins_icon_open} ${styles.aeroCoins_icon}`
								: styles.aeroCoins_icon
						}
					>
						<Image
							src={chevrondef}
							width={24}
							height={24}
							loading="eager"
							priority
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
