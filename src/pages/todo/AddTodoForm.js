import React from 'react';
import AddItemInput from './AddItemInput';
import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeIn, merge } from 'react-animations';

const AddTodoForm = ({ addTodo, activateBtn, isBtnActive }) => {
	return (
		<Overlay>
			<FormContainer>
				<TextContainer>
					<h3>Add a new todo</h3>
					<p>Add your new todo and press save</p>
				</TextContainer>
				<AddItemInput
					addTodo={addTodo}
					activateBtn={activateBtn}
					isBtnActive={isBtnActive}
				/>
			</FormContainer>
		</Overlay>
	);
};

const FadeAnimation = keyframes`${merge(fadeInUp, fadeIn)}`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: rgba(0, 0, 0, 0.6);
`;

const FormContainer = styled.div`
	animation: 0.5s ${FadeAnimation};
	height: 40vh;
	width: 40vw;
	background: steelblue;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	padding: 1.5rem 3rem;
`;

const TextContainer = styled.div`
	h3 {
		color: white;
		font-weight: 400;
		margin-bottom: 1rem;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		font-size: 1.5rem;
		text-transform: uppercase;
	}

	p {
		text-align: center;
		color: white;
		font-size: 1rem;
	}
`;

export default AddTodoForm;
