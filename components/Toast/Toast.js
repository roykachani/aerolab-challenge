import { useContext } from 'react';
import Image from 'next/image';

import { UserContext } from '../../context/user';
import closelogo from '../../assets/icons/cross-active.svg';
import iconError from '../../assets/icons/system-error.svg';
import iconSuccess from '../../assets/icons/system-success.svg';
import styles from './styles.module.css';

const Toast = () => {
	const { userState, removeMessageById } = useContext(UserContext);

	const handlemessageclose = (e) => {
		const id = e.target.id;
		removeMessageById(id);
	};

	return (
		<>
			<div className={styles.toast_main_container}>
				<div className={styles.toast_container}>
					{userState.messages.map((m, index) => (
						<div
							className={
								!!m.error
									? `${styles.toast_content} ${styles.toast_content_error}`
									: styles.toast_content
							}
							key={index}
						>
							<div className={styles.toast_info_box}>
								<div className={styles.toast_box_icon}>
									<Image
										src={!!m.error ? iconError : iconSuccess}
										width={26}
										height={26}
										loading="eager"
									/>
								</div>
								<span className={styles.toast_message}>
									{m.product !== '' && (
										<span
											className={`${styles.toast_message} ${styles.toast_message_product}`}
										>
											{m.product}
										</span>
									)}
									{m.points !== '' && (
										<span
											className={`${styles.toast_message} ${styles.toast_message_product}`}
										>
											{m.points}
										</span>
									)}{' '}
									{m.message}
								</span>
							</div>
							<div className={styles.toast_close_box}>
								<Image
									src={closelogo}
									width={26}
									height={26}
									className={styles.toast_close}
									onClick={handlemessageclose}
									id={index}
									loading="eager"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Toast;
