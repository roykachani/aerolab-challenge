import { useContext } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { UserContext } from '../context/user';
import { useFetch } from '../hooks/useFetch';
import arrow from '../assets/icons/Icons.svg';
import Walkthough from '../components/Walkthough';
import WavePattern from '../components/WavePattern/WavePattern';
import Products from '../components/Products/Products';

import styles from '../styles/Home.module.css';
import Footer from '../components/Footer/Footer';
import Toast from '../components/Toast/Toast';

export default function Home({ products }) {
	const { userState } = useContext(UserContext);

	return (
		<>
			<Head>
				<title>Aerolab-Challenge</title>
				<meta
					name="description"
					content="Redeem your coins in Tech Zone by Aerolab"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{userState.messages.length > 0 && <Toast />}
			<WavePattern />
			<section className={styles.landing_section}>
				<div className={styles.landing_welcome}>
					<div className={styles.welcome_box_text}>
						<div className={styles.box_title}>
							<h4 className={styles.title_h4}>EXPLORE THE</h4>
							<h1 className={styles.title_h1}>
								<span className={styles.title_h1_s}>TECH</span>ZONE
							</h1>
						</div>
						<span className={styles.title_span}>
							Here you’ll be able to redeem all of your hard-earned Aeropoints
							and exchange them for cool tech.
						</span>
					</div>
					<Link href="#product_section" scroll={false} replace={true}>
						<div className={styles.welcome_box_btn}>
							<div className={styles.btn_link_all_products}>
								<span className={styles.all_products_span}>
									VIEW ALL PRODUCTS
								</span>
								<Image
									src={arrow}
									width={24}
									height={24}
									alt={'Arrow-down'}
									loading="eager"
									priority
								/>
							</div>
						</div>
					</Link>
				</div>
				<div className={styles.landing_ilustration}>
					<div className={styles.ilustration_picture}></div>
					<div className={styles.background_ilustrtion}></div>
				</div>
			</section>
			<section className={styles.walkthrough_section}>
				<Walkthough />
			</section>
			<section id="product_section" className={styles.product_section}>
				<Products products={products} />
			</section>
			<footer className={styles.footer_section}>
				<Footer />
			</footer>
		</>
	);
}

export const getStaticProps = async () => {
	const [getdata] = useFetch();

	const products = await getdata('products');

	return {
		props: {
			products,
		},
		revalidate: 75600, //21hs
	};
};
