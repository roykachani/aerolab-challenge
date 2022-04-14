import { useRouter } from 'next/router';

import { PAGE } from '../../utils/constants';

import styles from './styles.module.css';

const Paginator = ({ currentPage, handlePage, pages }) => {
	const router = useRouter();

	const handleClick = (e) => {
		handlePage(e.target.id);
		const value = e.target.id;
		const page = () => {
			if (value === PAGE.BACK && currentPage > 1) {
				return currentPage - 1;
			} else if (value === PAGE.NEXT && currentPage < pages) {
				return currentPage + 1;
			} else {
				return currentPage;
			}
		};

		router.push(
			{
				pathname: router.pathname,
				query: {
					...router.query,
					page: page(),
				},
			},
			undefined,
			{ scroll: false, shallow: true }
		);
	};

	return (
		<>
			<div className={styles.paginator_container}>
				<div
					className={
						currentPage === 1 && (pages === 1 || pages !== 1)
							? `${styles.arrow_container_active} ${styles.arrow_container_inactive}`
							: styles.arrow_container_active
					}
					id={PAGE.BACK}
					onClick={handleClick}
					disabled={currentPage === 1}
				>
					<div
						id={PAGE.BACK}
						className={
							currentPage === 1 && (pages === 1 || pages !== 1)
								? `${styles.arrow} ${styles.arrow_inactive} ${styles.arrow_left}`
								: `${styles.arrow} ${styles.arrow_left}`
						}
					></div>
				</div>
				<div className={styles.paginator}>
					<span className={styles.span_paginator}>
						Page{' '}
						<span className={styles.span_color}>
							{pages === 1 ? 1 : currentPage} of {pages}
						</span>
					</span>
				</div>
				<div
					className={
						currentPage < pages
							? styles.arrow_container_active
							: `${styles.arrow_container_active} ${styles.arrow_container_inactive}`
					}
					id={PAGE.NEXT}
					onClick={handleClick}
					disabled={currentPage === pages}
				>
					<div
						className={
							currentPage < pages
								? styles.arrow
								: `${styles.arrow} ${styles.arrow_inactive}`
						}
						id={PAGE.NEXT}
					></div>
				</div>
			</div>
		</>
	);
};

export default Paginator;
