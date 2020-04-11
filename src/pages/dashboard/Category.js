import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Category({ heading, linkDestination }) {
	return (
		<Card to={linkDestination}>
			<h3 style={{ fontWeight: '600' }}>{heading}</h3>
		</Card>
	);
}

const Card = styled(Link)`
	width: 100%;
	height: 100px;
	border-radius: 3px;
	padding: 0.5rem 0.75rem;
	background: white;
	text-decoration: none;
	color: black;
	margin: 1rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;
