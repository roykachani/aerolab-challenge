import Image from 'next/image';

import card_logo_1 from '../../assets/icons/walkthrough-1.svg';
import card_logo_2 from '../../assets/icons/walkthrough-3.svg';
import card_logo_3 from '../../assets/icons/walkthrough-2.svg';

import styles from './styles.module.css';

const Walkthough = () => {
	return (
		<>
			<div className={styles.walkthough_container}>
				<div className={styles.cards_bg}></div>

				<div className={styles.cards_container}>
					<div className={styles.cards_a}>
						<div className={styles.card}>
							<div className={styles.card_top}>
								<div className={styles.ilustration_bg_card}></div>
								<div className={styles.ilustration_card_a}></div>
							</div>
							<div className={styles.card_bottom}>
								<div className={styles.card_title}>
									<div className={styles.icon_wrapper}>
										<Image
											src={card_logo_1}
											width="40px"
											height="40px"
											loading="lazy"
											alt="Card browser logo"
										/>
									</div>
									<div className={styles.title_wrapper}>
										<h3 className={styles.card_title_h3}>1—BROWSE</h3>
									</div>
								</div>
								<div className={styles.card_paragraph}>
									<span className={styles.paragraph_span}>
										Browse our tech catalog with more than 20 top tech products
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.cards_b}>
						<div className={styles.card}>
							<div className={styles.card_top}>
								<div className={styles.ilustration_bg_card}></div>
								<div className={styles.ilustration_card_b}></div>
							</div>
							<div className={styles.card_bottom}>
								<div className={styles.card_title}>
									<div className={styles.icon_wrapper}>
										<Image
											src={card_logo_2}
											width="40px"
											height="40px"
											loading="lazy"
											alt="Card choose logo"
										/>
									</div>
									<div className={styles.title_wrapper}>
										<h3 className={styles.card_title_h3}>2—CHOOSE</h3>
									</div>
								</div>
								<div className={styles.card_paragraph}>
									<span className={styles.paragraph_span}>
										Exchange your hard earned AeroPoints for the item you want
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className={styles.cards_c}>
						<div className={styles.card}>
							<div className={styles.card_top}>
								<div className={styles.ilustration_bg_card}></div>
								<div className={styles.ilustration_card_c}></div>
							</div>
							<div className={styles.card_bottom}>
								<div className={styles.card_title}>
									<div className={styles.icon_wrapper}>
										<Image
											src={card_logo_3}
											width="40px"
											height="40px"
											loading="lazy"
											alt="Card enjoy logo"
										/>
									</div>
									<div className={styles.title_wrapper}>
										<h3 className={styles.card_title_h3}>3—ENJOY!</h3>
									</div>
								</div>
								<div className={styles.card_paragraph}>
									<span className={styles.paragraph_span}>
										All done, you can relax! We’ll take care of delivery of your
										tech item!
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Walkthough;
