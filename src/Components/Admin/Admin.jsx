import React, { useCallback, useEffect, useState } from 'react';
import styles from './Admin.module.scss';
import axios from 'axios';
import Button from './components/Button';
import ApiModal from './components/ApiModal';

export default function Admin() {
	const [apiModalData, setApiModalData] = useState(false);
	const api = 'http://localhost:3001/api';
	const [allItems, setAllItems] = useState();
	const [allCategories, setAllCategories] = useState();

	async function fetchData(uri) {
		try {
			const resp = await axios.get(uri);
			return resp;
		} catch (err) {
			console.log(err);
		}
	}

	const fetchAllItems = useCallback(() => {
		fetchData(`${api}/menu/all-items`).then((resp) => setAllItems(resp.data));
	}, []);

	const fetchAllCategories = useCallback(() => {
		fetchData(`${api}/menu/all-categories`).then((resp) => setAllCategories(resp.data));
	}, []);

	useEffect(() => {
		fetchAllItems();
		fetchAllCategories();
	}, [fetchAllItems, fetchAllCategories]);

	async function handleAddItem({ name, category, price }) {
		try {
			const resp = await axios.post(`${api}/menu/add-item`, { name, category, price });
			fetchAllItems();
			return resp;
		} catch (err) {
			console.log(err);
		}
	}

	async function handleDeleteItem({ name }) {
		try {
			const resp = await axios.post(`${api}/menu/delete-item`, { name });
			fetchAllItems();
			return resp;
		} catch (err) {
			console.log(err);
		}
	}

	async function handleAddCategory({ name }) {
		try {
			const resp = await axios.post(`${api}/menu/add-category`, { name });
			fetchAllCategories();
			return resp;
		} catch (err) {
			console.log(err);
		}
	}

	async function handleDeleteCategory({ name }) {
		try {
			const resp = await axios.post(`${api}/menu/delete-category`, { name });
			fetchAllCategories();
			return resp;
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<main className={styles.admin}>
			<div className={styles.infoContainer}>
				<div className={styles.allItemsContainer}>
					<header>
						<u>All Items</u>
					</header>
					<ul className={styles.allItems}>
						{allItems?.map((item) => (
							<li key={item._id}>{item.name}</li>
						))}
					</ul>
				</div>
				<div className={styles.allCategoriesContainer}>
					<header>
						<u>All Categories</u>
					</header>
					<ul className={styles.allCategories}>
						{allCategories?.map((item) => (
							<li key={item._id}>{item.name}</li>
						))}
					</ul>
				</div>
			</div>
			<div className={styles.controls}>
				<header>
					<u>Controls</u>
				</header>
				<div className={styles.buttonContainer}>
					<Button
						openApiModal={() =>
							setApiModalData({ open: true, type: 'addItem', submit: handleAddItem })
						}
						btnLabel='Add Item'
					/>
					<Button
						openApiModal={() =>
							setApiModalData({
								open: true,
								type: 'removeItem',
								submit: handleDeleteItem,
							})
						}
						btnLabel='Remove Item'
					/>
					<Button
						openApiModal={() =>
							setApiModalData({
								open: true,
								type: 'addCategory',
								submit: handleAddCategory,
							})
						}
						btnLabel='Add Category'
					/>
					<Button
						openApiModal={() =>
							setApiModalData({
								open: true,
								type: 'removeCategory',
								submit: handleDeleteCategory,
							})
						}
						btnLabel='Remove Category'
					/>
				</div>
			</div>
			{apiModalData.open && (
				<ApiModal type={apiModalData.type} submit={apiModalData.submit} />
			)}
		</main>
	);
}
