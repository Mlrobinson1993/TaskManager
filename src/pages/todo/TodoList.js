import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import ProgressBar from './ProgressBar';
import AddTodoForm from './AddTodoForm';
import { TodoContext } from '../../context/todoContext/TodoContext';
import { DBAuth, db } from '../../DB/Database';
import Spinner from '../../helpers/Spinner';
import AddBtn from './AddBtn';

const TodoList = () => {
	const todoContext = useContext(TodoContext);

	const {
		toggleCompletion,
		addTodo,
		removeTodo,
		todos,
		setTodos,
		editTodo,
		activateBtn,
		isBtnActive,
		setIsLoading,
		isLoading,
		setProgress,
		progress,
		errors,
		setErrors,
	} = todoContext;

	//closes todo form when you press the escape key
	window.addEventListener('keydown', (e) => {
		if (isBtnActive && e.keyCode === 27) {
			activateBtn();
		}
	});

	const getTodos = () => {
		db.collection('users')
			.get()
			.then((querySnapshot) => {
				querySnapshot.forEach(function (doc) {
					// doc.data() is never undefined for query doc snapshots
					console.log(doc.id, ' => ', doc.data());
					if (doc.data().uid === DBAuth.currentUser.uid) {
						setTodos(doc.data().todos);
						setIsLoading(false);
					}
				});
			})
			.then(setProgress(calculateProgress()));
	};

	useEffect(() => {
		setIsLoading(true);
		getTodos();
	}, []);

	const calculateProgress = () => {
		let percentage;
		const totalArr = todos
			.map((todoArr) => (todoArr.completed ? 1 : 0))
			.filter((item) => item === 1);
		todos.length === 0 || totalArr.length === 0
			? (percentage = 0)
			: (percentage = Math.floor((totalArr.length / todos.length) * 100));
		return percentage;
	};

	return (
		<>
			<List>
				<ProgressBar percentage={calculateProgress()} />
				<AddBtn activateBtn={activateBtn} isBtnActive={isBtnActive} />

				{/* {isLoading && <Spinner />} */}
				{todos.length > 0 &&
					todos.map((todo, key) => {
						return (
							<TodoItem
								task={todo.task}
								key={todo.id}
								id={todo.id}
								editTodo={editTodo}
								completed={false || todo.completed}
								removeTodo={removeTodo}
								toggleCompletion={toggleCompletion}
								todos={todos}
								errors={errors}
								setErrors={setErrors}
							/>
						);
					})}

				{isBtnActive && (
					<AddTodoForm
						addTodo={addTodo}
						activateBtn={activateBtn}
						isBtnActive={isBtnActive}
					/>
				)}
			</List>
		</>
	);
};

const List = styled.div`
	margin: 3rem auto;
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (max-width: 1100px) {
		width: 70%;
	}

	@media (max-width: 900px) {
		width: 80%;
	}
	@media (max-width: 400px) {
		width: 90%;
	}
`;

export default TodoList;
