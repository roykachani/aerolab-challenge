import { useRouter } from 'next/router';
import { SORT } from '../../utils/constants';

import styles from './styles.module.css';

const Filters = ({ filter, handleModal, handleSort, sort }) => {
	const router = useRouter();

	const openCategories = () => {
		handleModal();
	};

	const selectSort = (id) => {
		handleSort(id);
		router.push(
			{
				pathname: router.pathname,
				query: {
					...router.query,
					sort: id,
				},
			},
			undefined,
			{ scroll: false, shallow: true }
		);
	};

	return (
		<>
			<div className={styles.filters_main_container}>
				<div className={styles.filter_container}>
					<div>
						<span className={styles.filters_titles}>Filter by:</span>
					</div>
					<div className={styles.filter}>
						<button className={styles.filter_input} onClick={openCategories}>
							<span>{filter === '' ? 'All Products' : filter}</span>
							<span className={styles.input_span_icon}>▼</span>
						</button>
					</div>
				</div>
				<div className={styles.slash_container}></div>
				<div className={styles.sort_container}>
					<div>
						<span className={styles.filters_titles}>Sort by:</span>
					</div>
					<div className={styles.sort_row}>
						<button
							className={
								sort === SORT.MOST_RECENT
									? `${styles.sort_btn} ${styles.sort_selected}`
									: styles.sort_btn
							}
							id={SORT.MOST_RECENT}
							onClick={(e) => selectSort(e.target.id)}
						>
							<span
								className={
									sort === SORT.MOST_RECENT
										? `${styles.sort_text} ${styles.sort_text_selected}`
										: styles.sort_text
								}
								id={SORT.MOST_RECENT}
								onClick={(e) => selectSort(e.target.id)}
							>
								Most Recent
							</span>
						</button>
						<button
							className={
								sort === SORT.LOWEST_PRICE
									? `${styles.sort_btn} ${styles.sort_selected}`
									: styles.sort_btn
							}
							id={SORT.LOWEST_PRICE}
							onClick={(e) => selectSort(e.target.id)}
						>
							<span
								className={
									sort === SORT.LOWEST_PRICE
										? `${styles.sort_text} ${styles.sort_text_selected}`
										: styles.sort_text
								}
								id={SORT.LOWEST_PRICE}
								onClick={(e) => selectSort(e.target.id)}
							>
								Lowest Price
							</span>
						</button>
						<button
							className={
								sort === SORT.HIGHEST_PRICE
									? `${styles.sort_btn} ${styles.sort_selected}`
									: styles.sort_btn
							}
							id={SORT.HIGHEST_PRICE}
							onClick={(e) => selectSort(e.target.id)}
						>
							<span
								className={
									sort === SORT.HIGHEST_PRICE
										? `${styles.sort_text} ${styles.sort_text_selected}`
										: styles.sort_text
								}
								id={SORT.HIGHEST_PRICE}
								onClick={(e) => selectSort(e.target.id)}
							>
								Highest Price
							</span>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Filters;
