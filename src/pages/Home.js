import React, { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../context/AuthContext';
import Dashboard from './dashboard/Dashboard';
import TodoList from './todo/TodoList';
import PublicHome from './PublicHome';

export default function Home() {
	const { activeUser } = useContext(AuthContext);

	return <Container>{activeUser ? <TodoList /> : <PublicHome />}</Container>;
}
const Container = styled.div`
	min-height: 100vh;
	width: 100vw;
	display: flex;
`;
