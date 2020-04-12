import React, { useState } from 'react';
import styled from 'styled-components';

const AddItemInput = ({ addTodo, activateBtn }) => {
	const [input, setInput] = useState('');
	const [errors, setErrors] = useState({});

	const resetInput = () => {
		console.log('resetted');
		setInput('');
	};

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleCancel = () => {
		activateBtn();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.length === 0) {
			activateBtn();
		} else if (input.length > 0 && input.length < 3) {
			setErrors({ error: 'Todo must be longer than 3 characters' });
		} else {
			addTodo(input);
			activateBtn();
			resetInput();
		}

		setTimeout(() => {
			setErrors({});
		}, 5000);
	};
	return (
		<Form onSubmit={handleSubmit}>
			{errors && <Error errors={errors}>{errors.error}</Error>}

			<input
				onChange={handleChange}
				type='text'
				placeholder='Add a task...'
				value={input}
			/>

			<BtnContainer>
				<button className='cancel' type='button' onClick={handleCancel}>
					Cancel
				</button>
				<button className='submit' type='submit'>
					Save
				</button>
			</BtnContainer>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 50%;

	input {
		border: none;
		outline: none;
		border-bottom: 3px solid lightgray;
		border-radius: 3px;
		transition: 0.2s ease-in-out;
		padding: 0.5rem 0.75rem;
		width: 100%;

		&:focus {
			border-bottom: 3px solid lightsteelblue;
		}
	}

	.submit {
		background: white;
		color: black;
		border-radius: 3px;
		border: none;
		padding: 0.5rem 0.75rem;
		margin-right: auto;
		margin-left: 1rem;
		width: 100px;
		cursor: pointer;
	}
	.cancel {
		margin-left: auto;
		margin-right: 1rem;
		background: red;
		color: white;
		border-radius: 3px;
		border: none;
		padding: 0.5rem 0.75rem;
		width: 100px;
		cursor: pointer;
	}
`;

const BtnContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
`;

const Error = styled.div`
	color: white;
	position: absolute;
	font-size: 12px;
	transition: 0.4s ease-out;
	transform: translate(-66px, -60px);
	opacity: ${(props) => (props.errors ? 1 : 0)};
`;

export default AddItemInput;
