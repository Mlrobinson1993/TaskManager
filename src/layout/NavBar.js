import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
	return (
		<Nav>
			<LogoContainer className='logo'>
				<Link to='/'>TODO</Link>
			</LogoContainer>
			<ListContainer>
				<Link activeClassName='active-navlink' exact to='/'>
					Home
				</Link>

				<Link activeClassName='active-navlink' exact to='/signin'>
					Sign In
				</Link>

				<Link activeClassName='active-navlink' exact to='/signup'>
					Sign Up
				</Link>
			</ListContainer>
		</Nav>
	);
}

const Nav = styled.nav`
	width: 100vw;
	height: 10vh;
	background: rgb(38, 46, 65);
	display: grid;
	grid-template-columns: 1.5fr 1fr;
	padding: 0 5rem;

	@media (max-width: 600px) {
		grid-template-columns: 1fr 1.5fr;
		padding: 0 1rem;
	}
`;

const LogoContainer = styled.span`
	grid-column: 1;
	display: flex;
	align-items: center;
	color: white;
`;

const ListContainer = styled.span`
	display: flex;
	flex-direction: row;
	grid-column: 2;
	list-style: none;
	align-items: center;
	justify-content: space-around;
`;

const Link = styled(NavLink)`
	color: white;
	padding-bottom: 1px;
	text-decoration: none;
	border-bottom: 3px solid transparent;
	transition: 0.2s ease-out;
`;
