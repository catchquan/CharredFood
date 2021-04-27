import React, { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ApiModal.module.scss';

export default function ApiModal({ type, submit }) {
	const [modalConfig, setModalConfig] = useState({});
	const [payload, setPayload] = useState({});
	const [respMessage, setRespMessage] = useState('');

	useEffect(() => {
		const config = {};
		switch (type) {
			case 'addItem': {
				config.header = 'Add Item';
				config.buttonText = 'Submit Item';
				config.inputs = [
					{
						label: 'Item Name',
						name: 'name',
						type: 'text',
						placeholder: 'Enter item name..',
					},
					{
						label: 'Item Category',
						name: 'category',
						type: 'text',
						placeholder: 'Enter item category..',
					},
					{
						label: 'Item Price',
						name: 'price',
						type: 'number',
						placeholder: 'Enter item price..',
					},
				];
				break;
			}
			case 'removeItem': {
				config.header = 'Remove Item';
				config.buttonText = 'Remove Item';
				config.inputs = [
					{
						label: 'Item Name',
						name: 'name',
						type: 'text',
						placeholder: 'Enter item name..',
					},
				];
				break;
			}
			case 'addCategory': {
				config.header = 'Add Category';
				config.buttonText = 'Add Category';
				config.inputs = [
					{
						label: 'Category Name',
						name: 'name',
						type: 'text',
						placeholder: 'Enter category name..',
					},
				];
				break;
			}
			case 'removeCategory': {
				config.header = 'Remove Category';
				config.buttonText = 'Remove Category';
				config.inputs = [
					{
						label: 'Category Name',
						name: 'name',
						type: 'text',
						placeholder: 'Enter category name..',
					},
				];
				break;
			}
			default: {
				break;
			}
		}

		setModalConfig(config);
	}, [type]);

	//Input handler
	function handleChange(evt) {
		evt.persist();
		setPayload((curr) => {
			return { ...curr, [evt.target.name]: evt.target.value };
		});
	}

	//Only submit if all payload fields are filled
	//TODO: Add validation/error handling
	const handleSubmit = useCallback(async () => {
		//Guard clause for no inputs - checks if amount of payload fields is correct
		//This is due to payload be instantiated with no keys and thus validating
		if (Object.keys(payload).length !== modalConfig.inputs.length) return;

		//Input validated (currently just checks if they're filled)
		if (Object.keys(payload).every((field) => payload[field] !== '')) {
			const resp = await submit(payload);
			setPayload((submittedPayload) => {
				const temp = submittedPayload;
				Object.keys(temp).forEach((field) => (temp[field] = ''));
				return temp;
			});

			setRespMessage(resp.data);
		}
	}, [payload, submit, modalConfig]);

	//Submit item on enter press
	useEffect(() => {
		function handleEnter(e) {
			if (e.key === 'Enter') {
				buttonRef.current.click();
			}
		}
		window.addEventListener('keyup', handleEnter);
		return () => window.removeEventListener('keyup', handleEnter);
	}, [handleSubmit]);

	//Detect switching api type
	useEffect(() => {
		//Provide focus on first input
		if (firstInputRef.current) firstInputRef.current.focus();

		//Clear resp message
		setRespMessage('');

		//Reset payload
		setPayload(() => {
			const temp = {};
			if (modalConfig.inputs) {
				modalConfig.inputs.forEach((input) => (temp[input.name] = ''));
			}

			return temp;
		});
	}, [modalConfig]);

	const firstInputRef = useRef();
	const buttonRef = useRef();
	return (
		<div className={styles.apiModal}>
			<header>{modalConfig.header}</header>
			<p className={styles.respMessage} data-null={respMessage.length < 1}>
				{respMessage || 'null'}
			</p>
			{modalConfig.inputs?.map((input, idx) => (
				<input
					ref={idx === 0 ? firstInputRef : null}
					key={input.name}
					type={input.type}
					placeholder={input.placeholder}
					name={input.name}
					onChange={handleChange}
					value={payload[input.name] || ''}
				/>
			))}
			<button ref={buttonRef} onClick={handleSubmit}>
				{modalConfig.buttonText}
			</button>
		</div>
	);
}
