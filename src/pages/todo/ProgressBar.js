import React from 'react';
import styled from 'styled-components';
export default function ProgressBar({ percentage }) {
	return (
		<Bar className='progress'>
			<div className='top'>
				<h5 className='top--title'>Total Progress</h5>
				<h5 className='top--percentage'>{percentage}%</h5>
			</div>
			<div className='bottom'>
				<div className='bottom--container'>
					<Progress style={{ width: `${percentage}%` }}></Progress>
				</div>
			</div>
		</Bar>
	);
}

const Bar = styled.div`
	margin-bottom: 1.5rem;

	width: 90%;
	padding: 0.5rem;
	display: flex;
	flex-direction: column;

	.top {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		color: white;
	}

	.bottom {
		width: 100%;

		&--container {
			width: 100%;
			background: rgb(38, 46, 65);
			border-radius: 5px;
		}
	}
`;

const Progress = styled.div`
	border: 1px solid rgb(172, 225, 185);
	background-color: rgb(172, 225, 185);
	height: 100%;
	padding: 0.25rem;
	border-radius: 5px;
	margin-top: 1rem;
	transition: 0.4s cubic-bezier(0.57, 0.21, 0.69, 1.25);
`;
