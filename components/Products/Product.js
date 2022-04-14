import Image from 'next/image';
import { useContext } from 'react';

import aeropay2 from '../../assets/icons/aeropay-2.svg';
import aeropay3 from '../../assets/icons/aeropay-3.svg';
import { UserContext } from '../../context/user';

import styles from './styles.module.css';

const Product = ({ p, handleProduct, productId }) => {
	const { userState } = useContext(UserContext);

	const selectProduct = (e) => {
		const id = e.target.id;
		handleProduct(id, parseInt(p.cost), p.name);
	};

	return (
		<>
			<div className={styles.product_box}>
				<div className={styles.product_card}>
					<div className={styles.product_image_container}>
						<Image
							className={styles.img_product}
							src={p.img.url}
							loading="lazy"
							width={280}
							height={204}
							alt={p.name}
						/>
					</div>
					<div className={styles.product_detail}>
						<h3 className={styles.title_h3}>{p.name}</h3>
						<span className={styles.categry_text}>{p.category}</span>
					</div>
				</div>
				<div className={styles.redeem_btn_box}>
					<button
						className={[
							`${productId === p._id && styles.btn_processing}`,
							`${
								userState.user?.points > p.cost
									? `${styles.btn_redeem} ${styles.btn_redeem_h}`
									: `${styles.btn_redeem} ${styles.btn_redeem_desabled}`
							}`,
						].join(' ')}
						id={p._id}
						onClick={selectProduct}
						disabled={!!userState.loading | (userState.user?.points < p.cost)}
					>
						{productId !== p._id ? (
							<>
								{userState.user?.points < p.cost ? 'You need' : 'Redeem for'}
								<div
									className={styles.btn_redeem_text}
									id={p._id}
									disabled={
										!!userState.loading | (userState.user?.points < p.cost)
									}
								>
									<Image
										className={styles.icon_redeem_product}
										loading="lazy"
										width={24}
										height={24}
										src={userState.user?.points > p.cost ? aeropay3 : aeropay2}
										alt="aeropay logo 2"
									/>
									<span
										className={styles.btn_text_span}
										id={p._id}
										onClick={selectProduct}
										disabled={
											!!userState.loading | (userState.user?.points < p.cost)
										}
									>
										{p.cost}
									</span>
								</div>
							</>
						) : (
							'Processing...'
						)}
					</button>
				</div>
			</div>
		</>
	);
};

export default Product;
