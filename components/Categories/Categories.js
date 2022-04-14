import { useRouter } from 'next/router';
import styles from './styles.module.css';

const Categories = ({ categories, handleCategory, handleModal }) => {
	const router = useRouter();

	const onSelectCategory = (value) => {
		handleCategory(value);
		handleModal();
		router.push(
			{
				pathname: router.pathname,
				query: {
					...router.query,
					filter: value === '' ? 'allProducts' : value,
				},
			},
			undefined,
			{ scroll: false, shallow: true }
		);
	};

	return (
		<>
			<div className={styles.categories_container}>
				<div
					className={styles.categories_options}
					onClick={() => onSelectCategory('')}
				>
					<span className={styles.categories_option}>All Products</span>
				</div>

				{categories.map((c, index) => (
					<div
						key={index}
						className={styles.categories_options}
						onClick={(e) => onSelectCategory(e.target.id)}
						id={c}
					>
						<span
							className={styles.categories_option}
							onClick={(e) => onSelectCategory(e.target.id)}
							id={c}
						>
							{c}
						</span>
					</div>
				))}
			</div>
		</>
	);
};

export default Categories;
