import React from 'react';

export default function AddItem({ openApiModal, btnLabel }) {
	return (
		<button onClick={openApiModal}>
			<p>{btnLabel}</p>
		</button>
	);
}
