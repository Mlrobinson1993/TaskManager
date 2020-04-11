import React from 'react';
import styled from 'styled-components';
import Category from './Category';

export default function Dashboard() {
	return (
		<Container>
			<Category heading='Todos' linkDestination='/todos' />

			<Category heading='My Account' linkDestination='/account' />
		</Container>
	);
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-rows: 1fr 1fr;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 15px;
	padding: 3rem;
`;
