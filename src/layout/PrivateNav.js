import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { DBAuth } from '../DB/Database';

export default function PrivateNav({ displayName }) {
	const handleSignOut = () => {
		DBAuth.signOut();
	};

	const capitaliseFirstLetter = (name) => {
		const displayName = name.split('');
		const letter = displayName[0].toUpperCase();
		displayName[0] = letter;
		return displayName.join('');
	};

	return (
		<Nav>
			<LogoContainer className='logo'>
				<Link exact to='/'>
					TODO
				</Link>
			</LogoContainer>
			<ListContainer>
				<Link activeClassName='active-navlink' exact to='/'>
					Todos
				</Link>
				<Link activeClassName='active-navlink' exact to='/account'>
					{capitaliseFirstLetter(displayName)}
				</Link>
				<NavBtn onClick={handleSignOut}>Sign Out</NavBtn>
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
	transition: 0.2s ease-out;
	border-bottom: 3px solid transparent;
`;

const NavBtn = styled.button`
	color: white;
	padding-bottom: 1px;
	text-decoration: none;
	border: none;
	background: transparent;
	outline: none;
	border-bottom: 3px solid transparent;
	cursor: pointer;
`;
