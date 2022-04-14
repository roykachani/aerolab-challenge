import { useContext, useState } from 'react';
import Image from 'next/image';

import { UserContext } from '../../context/user';
import closelogo from '../../assets/icons/cross-active.svg';
import aeropay from '../../assets/icons/aeropay-2.svg';
import aeropay1 from '../../assets/icons/aeropay-3.svg';

import styles from './styles.module.css';

export const Wave = () => {
	return <></>;
};

const Aeropay = ({ handleClick, isOpen }) => {
	const { userState, addPoints, removeMessage } = useContext(UserContext);
	const [amount, setAmount] = useState('5000');

	const handleChange = (e) => {
		setAmount(e.target.id);
	};

	const handlePonints = async () => {
		addPoints({ amount: parseInt(amount) });

		setTimeout(() => {
			removeMessage();
		}, 10000);
	};

	return (
		<>
			{/* <div className={styles.aeropay_main}> */}
			<div className={styles.aeropay_container}>
				<div className={styles.aeropay_header}>
					<div className={styles.aeropay_title_content}>
						<h4 className={styles.aeropay_title}>Add Balance</h4>
						<Image
							onClick={() => {
								!!isOpen && handleClick();
							}}
							className={styles.aeropay_close}
							src={closelogo}
							width={24}
							height={24}
							alt="close"
							loading="eager"
						/>
					</div>
				</div>
				<div className={styles.aeropay_content}>
					<div className={styles.aeropay_card_amout}>
						<div className={styles.aerocard}>
							<div className={styles.wavePattern_container}>
								<div className={styles.wavePatternA}></div>
							</div>
							<div className={styles.wavemask}></div>
							<div
								className={`${styles.aerocard_content} ${styles.content_top}`}
							>
								<span>Aerocard</span>
								<Image
									src={aeropay}
									width={24}
									height={24}
									alt="close"
									loading="eager"
								/>
							</div>
							<div
								className={`${styles.aerocard_content} ${styles.content_bottom}`}
							>
								<span>{userState.user.name}</span>
								<span>07/23</span>
							</div>
						</div>
						<div className={styles.amount_box}>
							<div className={styles.amount_content_top}>
								<div className={styles.btn_box_amount}>
									<button
										className={
											amount === '1000'
												? `${styles.btn_amount} ${styles.amount_select}`
												: styles.btn_amount
										}
										id="1000"
										onClick={handleChange}
									>
										<span
											className={
												amount === '1000'
													? `${styles.amount_text} ${styles.amount_text_selected}`
													: styles.amount_text
											}
											id="1000"
											onClick={handleChange}
										>
											1000
										</span>
									</button>
								</div>
								<div className={styles.btn_box_amount}>
									<button
										className={
											amount === '5000'
												? `${styles.btn_amount} ${styles.amount_select}`
												: styles.btn_amount
										}
										id="5000"
										onClick={handleChange}
									>
										<span
											className={
												amount === '5000'
													? `${styles.amount_text} ${styles.amount_text_selected}`
													: styles.amount_text
											}
											id="5000"
											onClick={handleChange}
										>
											5000
										</span>
									</button>
								</div>
								<div className={styles.btn_box_amount}>
									<button
										className={
											amount === '7500'
												? `${styles.btn_amount} ${styles.amount_select}`
												: styles.btn_amount
										}
										id="7500"
										onClick={handleChange}
									>
										<span
											className={
												amount === '7500'
													? `${styles.amount_text} ${styles.amount_text_selected}`
													: styles.amount_text
											}
											id="7500"
											onClick={handleChange}
										>
											7500
										</span>
									</button>
								</div>
							</div>
							<div className={styles.amount_content_bottom}>
								<div className={styles.btn_box_add_amount}>
									<button
										className={styles.btn_add_amount}
										onClick={handlePonints}
										disabled={!!userState.loading}
									>
										{!userState.loading ? (
											<>
												<div className={styles.aero_logo1}>
													<Image
														src={aeropay1}
														width={24}
														height={24}
														alt="logo-1"
														loading="eager"
													/>
												</div>
												Add Points
											</>
										) : (
											'Prosessing...'
										)}
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</>
	);
};

export default Aeropay;
