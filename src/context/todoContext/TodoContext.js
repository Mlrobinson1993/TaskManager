import React, { useState, createContext } from 'react';
import uuid from 'uuid/v4';
import { db, DBAuth, firebase } from '../../DB/Database';
const TodoContext = createContext([]);

const TodoStateProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [progress, setProgress] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const toggleCompletion = (todoId) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(updatedTodos);
		storeAllTodos(updatedTodos);
	};

	const addTodo = (todo) => {
		const newTodo = {
			id: uuid(),
			task: todo,
			completed: false,
			date: new Date(),
		};
		setTodos([...todos, newTodo]);
		storeTodo(newTodo);
	};

	const storeTodo = (todo) => {
		const dbTodos = db.collection('users').doc(DBAuth.currentUser.uid);
		dbTodos.update({
			todos: firebase.firestore.FieldValue.arrayUnion(todo),
		});

		console.log(dbTodos);
	};

	const storeAllTodos = (todos) => {
		const dbTodos = db.collection('users').doc(DBAuth.currentUser.uid);
		dbTodos.update({
			todos: todos,
		});
		console.log(dbTodos);
	};

	const removeFromStorage = (todoID) => {
		const dbTodos = db.collection('users').doc(DBAuth.currentUser.uid);

		db.collection('users')
			.doc(DBAuth.currentUser.uid)
			.get()
			.then((queryDocumentSnapshot) => {
				queryDocumentSnapshot.data().todos.forEach((todo) => {
					console.log(todo);
					if (todo.id === todoID) {
						dbTodos.update({
							todos: firebase.firestore.FieldValue.arrayRemove(todo),
						});
					}
				});
			});
	};

	const removeTodo = (todoId) => {
		const updatedTodos = todos.filter((todo) => {
			return todo.id !== todoId;
		});
		setTodos(updatedTodos);
		removeFromStorage(todoId);
	};

	const editTodo = (todoId, newTask) => {
		const updatedTodos = todos.map((todo) => {
			if (todoId === todo.id) {
				todo.task = newTask;
			}
			return todo;
		});

		setTodos(updatedTodos);
		storeAllTodos(todos);
	};

	const [isBtnActive, setIsBtnActive] = useState(false);
	const activateBtn = () => {
		setIsBtnActive(!isBtnActive);
	};
	return (
		<TodoContext.Provider
			value={{
				toggleCompletion,
				addTodo,
				removeTodo,
				editTodo,
				setTodos,
				todos,
				storeTodo,
				isBtnActive,
				activateBtn,
				progress,
				setProgress,
				isLoading,
				setIsLoading,
				errors,
				setErrors,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};

export { TodoContext, TodoStateProvider };
