import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import TodoSVG from '../images/todoSVG.svg';

export default function PublicHome() {
	return (
		<Container>
			<ImgContainer>
				<img src={TodoSVG} alt='illustration' />
			</ImgContainer>
			<TextContainer>
				<h1>Todo List</h1>
				<p>
					This is a task management app, created to help you with organisation,
					time management and productivity. This application enables you to
					create, edit and delete todos. Your todos are saved to Google's
					Firestore, allowing you to access them from anywhere on any
					internet-enabled device. The app also uses Google's Firebase
					Authentication, forcing new users to verify their email before
					accessing protected pages and using the application. You're also able
					to recover forgotten passwords, edit your personal details and delete
					your account.
				</p>

				<TagContainer>
					<Tag>React.js</Tag> <Tag>Styled Components</Tag> <Tag>Firebase</Tag>{' '}
					<Tag>Formik</Tag>
				</TagContainer>
				<BtnContainer>
					<Btn to='signin'>Sign In</Btn>
					<Btn bgColor='rgb(239,138,132)' to='signup'>
						Create Account
					</Btn>
				</BtnContainer>
			</TextContainer>
		</Container>
	);
}

const Container = styled.div`
	width: 80%;
	margin: 0 auto;
	min-height: 90vh;
	display: grid;
	grid-template-rows: 1fr;
	grid-template-columns: 0.75fr 1.25fr;
	grid-gap: 15px;
	align-items: center;

	@media (max-width: 750px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(2, 1fr);
		justify-content: center;
		grid-gap: 0;
	}
`;

const ImgContainer = styled.div`
	border-radius: 50%;
	border: 3px solid white;
	height: 350px;
	width: 350px;
	grid-column: 1;
	overflow: hidden;
	box-shadow: 0 0px 28px rgba(255, 255, 255, 0.25),
		0 0px 10px rgba(255, 255, 255, 0.22);
	object-fit: cover;

	img {
		object-fit: contain;
		height: 100%;
	}

	@media (max-width: 1000px) {
		height: 300px;
		width: 300px;
	}

	@media (max-width: 750px) {
		grid-row: 1;
		margin: 1rem auto;
	}

	@media (max-width: 400px) {
		height: 250px;
		width: 250px;
		grid-row: 1;
		margin: 1rem auto;
	}
`;
const TextContainer = styled.div`
	grid-column: 2;
	max-width: 800px;
	height: 60%;
	margin: auto 0;
	display: flex;
	flex-direction: column;
	justify-content: center;

	h1 {
		color: white;
		font-size: 2rem;
		margin-bottom: 2rem;
	}

	p {
		color: white;
		margin-bottom: 1rem;
		line-height: 22px;
		font-weight: 400;
	}

	@media (max-width: 750px) {
		grid-row: 2;
		grid-column: 1;
		text-align: center;
	}
`;

const TagContainer = styled.div`
	display: flex;
	margin-bottom: 1rem;
	align-items: center;
	flex-wrap: wrap;

	@media (max-width: 750px) {
		justify-content: center;
	}
`;

const Tag = styled.span`
	border: 1px solid white;
	padding: 0.5rem 0.75rem;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: nowrap;
	white-space: nowrap;
	border-radius: 20px;
	margin: 0.5rem 0.5rem 0.5rem 0;
	font-size: 0.9rem;
	background: transparent;
`;

const BtnContainer = styled.div`
	display: flex;

	@media (max-width: 750px) {
		justify-content: center;
	}
`;

const Btn = styled(Link)`
	background: ${({ bgColor }) => bgColor || 'steelblue'};
	margin-right: 1rem;
	color: white;
	text-decoration: none;
	border-radius: 30px;
	padding: 1rem 1.25rem;
	transition: 0.2s ease-in-out;
	transform: translateY(0);

	&:hover {
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
		transform: translateY(-2px);
	}

	&:active {
		box-shadow: 0 7px 14px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22);
		transform: translateY(0px);
	}
`;
