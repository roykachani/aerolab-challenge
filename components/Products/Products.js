import { useCallback, useContext, useEffect, useMemo, useState } from 'react';

import Product from './Product';
import Filters from '../Filters/Filters';
import Paginator from '../Paginator';
import Categories from '../Categories/Categories';
import { ITEMS_PER_PAGE, SORT } from '../../utils/constants';
import { UserContext } from '../../context/user';

import styles from './styles.module.css';

const Products = ({ products }) => {
	const { userState, redeemPoints, removeMessage } = useContext(UserContext);
	const [open, setOpen] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [categories, setCategories] = useState([]); //falta ordenar stylar lista de productos- footer
	const [filter, setFilter] = useState('');
	const [sort, setSort] = useState(SORT.MOST_RECENT);
	const [productId, setProductId] = useState('');

	//handleSort
	const handleSort = (value) => {
		setSort(value);
	};

	const sortItems = useMemo(() => {
		if (sort === SORT.HIGHEST_PRICE) {
			return [...products].sort((a, b) => b.cost - a.cost);
		} else if (sort === SORT.LOWEST_PRICE) {
			return [...products].sort((a, b) => a.cost - b.cost);
		} else {
			return products;
		}
	}, [products, sort]);

	//handleCategory
	const createCategories = useCallback(() => {
		const categoriesArray = [];
		products.map((p) => {
			if (!categoriesArray.includes(p.category)) {
				categoriesArray.push(p.category);
			}
		});
		return categoriesArray;
	}, [products]);

	useEffect(() => {
		setCategories(createCategories());
	}, [products, createCategories]);

	const handleCategory = (category) => {
		setFilter(category);
	};

	const handleModal = () => setOpen(!open);

	//handlePage
	const pages =
		filter === ''
			? products.length / ITEMS_PER_PAGE
			: Math.ceil(
					products.filter((p) => p.category === filter).length / ITEMS_PER_PAGE
			  );
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const selectedProducts = sortItems.slice(
		startIndex,
		startIndex + ITEMS_PER_PAGE
	);
	let countItems = 0;

	const handlePage = (value) => {
		if (value === 'back') {
			if ((currentPage > 1) & (currentPage <= pages))
				setCurrentPage(currentPage - 1);
		} else if (value === 'next') {
			if (currentPage < pages) setCurrentPage(currentPage + 1);
		}
	};

	useEffect(() => {
		setCurrentPage(1);
	}, [filter, sort]);

	/*redeem product */
	const handleProduct = (id, pointCost, product) => {
		setProductId(id);
		redeemPoints({ productId: id }, pointCost, product);
		setTimeout(() => {
			removeMessage();
		}, 10000);
	};
	useEffect(() => {
		if (userState.loading == false) {
			setProductId('');
		}
	}, [userState.messages]);

	return (
		<>
			<div
				className={styles.products_main_container}
				onClick={() => {
					!!open && setOpen(false);
				}}
			>
				<div className={styles.products_container}>
					<div className={styles.products_container_title_and_controls}>
						<div className={styles.products_container_title}>
							<h2 className={styles.title_h2}>
								<span className={styles.title_h2_s}>TECH</span> PRODUCTS
							</h2>
						</div>
						<div className={styles.products_container_controls}>
							<div className={styles.box_a}>
								<Filters
									filter={filter}
									handleModal={handleModal}
									handleSort={handleSort}
									sort={sort}
								/>
							</div>
							{!!open && (
								<div className={styles.categories_container}>
									<Categories
										categories={categories}
										handleCategory={handleCategory}
										handleModal={handleModal}
									/>
								</div>
							)}
							<div className={styles.box_b}>
								<Paginator
									currentPage={currentPage}
									handlePage={handlePage}
									pages={pages}
									filter={filter}
								/>
							</div>
						</div>
					</div>
					<div className={styles.main_products_content}>
						<div className={styles.products_content}>
							{filter === '' &&
								selectedProducts.map((p) => (
									<Product
										p={p}
										key={p._id}
										handleProduct={handleProduct}
										productId={productId}
									/>
								))}
							{filter !== '' &&
								sortItems.map((p) => {
									if (p.category.includes(filter)) {
										countItems++;
										return (
											<Product
												p={p}
												key={p._id}
												handleProduct={handleProduct}
												productId={productId}
											/>
										);
									}
								})}
						</div>
					</div>
					<div className={styles.products_container_paginator}>
						<div className={styles.empty}></div>
						<div className={styles.number_of_products}>
							<span className={styles.number_products}>
								{filter !== ''
									? countItems
									: selectedProducts.length * currentPage}{' '}
								of {filter !== '' ? countItems : products.length}{' '}
							</span>
							products
						</div>
						<Paginator
							currentPage={currentPage}
							handlePage={handlePage}
							pages={pages}
						/>
					</div>
				</div>
			</div>
		</>
	);
};

export default Products;
