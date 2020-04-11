import React, { useState, useContext } from 'react';
import { TodoContext } from '../../context/todoContext/TodoContext';
import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeIn, merge } from 'react-animations';
import { FaTrashAlt, FaEdit, FaSave } from 'react-icons/fa';
import AddTodoForm from './AddTodoForm';

export default function TodoItem({
	task,
	removeTodo,
	completed,
	toggleCompletion,
	id,
	errors,
	setErrors,
}) {
	const handleClick = (e) => {
		removeTodo(id);
	};
	const [edittedTodo, setEdittedTodo] = useState('');
	const [isEditFormOpen, setIsEditFormOpen] = useState(false);

	const { editTodo } = useContext(TodoContext);

	// const isChecked = () => {
	// 	return completed ? { color: 'red' } : null;
	// };

	// const [draggedItem, setDraggedItem] = useState(null);
	// const handleDrag = (e, todo) => {
	// 	e.preventDefault();
	// 	setDraggedItem(e.target);
	// 	console.log(e.target);
	// };

	// const handleDragOver = e => {
	// 	e.preventDefault();
	// };

	// const handleDrop = e => {
	// 	// console.log(e.target.inne);
	// 	for (let i = 0; i < todos.length; i++) {
	// 		// e.target.innerText === todos[i].task
	// 	}
	// };
	const handleEdit = () => {
		setIsEditFormOpen(!isEditFormOpen);
	};
	const handleTodoChange = (e) => {
		e.preventDefault();

		if (edittedTodo.length === 0) {
			setIsEditFormOpen(false);
		} else if (edittedTodo.length > 0 && edittedTodo.length < 3) {
			setErrors({ error: 'Todo must be longer than 3 characters' });
		} else {
			console.log(edittedTodo);
			console.log(id);
			editTodo(id, edittedTodo);
			setIsEditFormOpen(false);
		}

		setTimeout(() => {
			setErrors({});
		}, 5000);
	};
	return (
		<Todo
			// draggable
			// onDrag={handleDrag}
			// onDragOver={handleDragOver}
			// onDrop={handleDrop}
			isEditFormOpen={isEditFormOpen}
		>
			<p>
				<input
					className='todolist__item--checkbox'
					type='checkbox'
					checked={completed}
					onChange={() => toggleCompletion(id)}
					id={id}
				/>
				<label for={id} className='todolist__item--label'>
					{completed && <Dot></Dot>}
				</label>
			</p>
			{isEditFormOpen ? (
				<EditForm onSubmit={handleTodoChange}>
					<EditInput
						className='todolist__edit'
						type='text'
						onChange={(e) => setEdittedTodo(e.target.value)}
						placeholder={task}
						value={edittedTodo}
					/>
					<button type='submit'>
						<FaSave />
					</button>
					{errors && <Error errors={errors}>{errors.error}</Error>}
				</EditForm>
			) : (
				<Text completed={completed}>{task}</Text>
			)}
			<IconContainer>
				{!isEditFormOpen && (
					<span className='todolist__item--delete' onClick={handleClick}>
						<FaTrashAlt />
					</span>
				)}
				<span className='todolist__item--edit' onClick={handleEdit}>
					<FaEdit />
				</span>
			</IconContainer>
		</Todo>
	);
}

const fadeAnimation = keyframes`${merge(fadeInUp, fadeIn)}`;
const DotFadeIn = keyframes`${fadeIn}`;

const Todo = styled.div`
	animation: 0.3s ${fadeAnimation};
	width: 90%;
	background-color: rgb(38, 46, 65);
	padding: 1.5rem;
	border-radius: 5px;
	display: flex;

	justify-content: space-between;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

	transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);

	&:hover {
		/* box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22); */
		background-color: ${(props) =>
			props.isEditFormOpen ? 'rgb(38, 46, 65)' : 'lightsteelblue'};
	}

	&:not(:last-child) {
		border-bottom: 1px solid rgba(0, 0, 0, 0.4);
		margin-bottom: 0.5rem;
	}
`;

const IconContainer = styled.span`
	display: flex;
	.todolist__item--delete {
		cursor: pointer;
		margin-left: 1rem;

		svg {
			color: red;
			transform: scale(1);
			transition: 0.1s ease-in-out;

			&:hover {
				transform: scale(1.1);
			}

			&:active {
				transform: scale(0.9);
			}
		}
	}
	.todolist__item--edit {
		cursor: pointer;
		margin-left: 1rem;
		svg {
			transform: scale(1);
			transition: 0.1s ease-in-out;
			color: rgb(172, 225, 185);

			&:hover {
				transform: scale(1.1);
				color: black;
			}

			&:active {
				transform: scale(0.9);
			}
		}
	}
`;

const Text = styled.span`
	margin-right: auto;
	margin-left: 1rem;
	transition: 0.2s ease-in-out;
	text-decoration: ${(props) =>
		props.completed ? 'line-through dashed steelblue' : 'none'};
	color: ${(props) => (props.completed ? 'gray' : 'white')};

	@media (max-width: 400px) {
		margin-left: 0;
	}
`;

const EditForm = styled.form`
	width: 80%;
	margin-right: auto;
	margin-left: 1rem;
	transition: 0.2s ease-in-out;
	border: none;
	display: flex;
	border-bottom: 1px solid steelblue;

	button {
		outline: none;
		border: none;
		color: white;
		margin-left: 1rem;
		font-size: 1.2rem;
		background: rgb(38, 46, 65);

		&:hover {
			cursor: pointer;
		}

		&:focus {
			border-bottom: 2px solid steelblue;
		}
	}

	@media (max-width: 900px) {
		width: 70%;
	}
	@media (max-width: 400px) {
		margin-left: 0;
		width: 80%;
	}
`;

const EditInput = styled.input`
	width: 100%;
	color: white;
	transition: 0.2s ease-in-out;
	border: none;
	background: rgb(38, 46, 65);

	&:focus {
		outline: none;
	}
`;

const Error = styled.div`
	color: red;
	position: absolute;
	font-size: 12px;
	transition: 0.4s ease-out;
	transform: translateY(-15px);
	opacity: ${(props) => (props.errors ? 1 : 0)};
`;

const Dot = styled.span`
	animation: 0.3s ${DotFadeIn};
	position: absolute;
	height: 1em;
	left: 4px;
	top: 2px;
	border-radius: 50%;
	width: 1em;
	background: steelblue;
`;
