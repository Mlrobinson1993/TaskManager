import React, { Fragment } from 'react';
import styled from 'styled-components';

export default function AddBtn({ activateBtn, isBtnActive }) {
	const handleClick = () => {
		activateBtn();
	};
	return (
		<Fragment>
			<Btn onClick={handleClick}>Add Todo</Btn>
		</Fragment>
	);
}

const Btn = styled.button`
	background-color: steelblue;
	cursor: pointer;
	padding: 0.75rem 0.5rem;
	color: white;
	border-radius: 3px;
	margin-bottom: 2rem;
	border: none;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
		background-color: lightsteelblue;
	}
`;
