import * as React from 'react';
import styled from '@emotion/styled';

interface ImageProps {
	children: React.ReactNode;
}

const Wrapper = styled.div<{ animationDelay: number }>`
	position: relative;
	display: inline-block;
	width: auto;

	transition: all 0.2s linear;
	animation: float 6s ease-in-out infinite;
	animation-delay: ${props => props.animationDelay}s;
	z-index: 10;

	width: 100%;
	/* height: 100%; */
	margin-top: 20px;

	&::after {
		content: '';
		width: 100%;
		height: 100%;
		background-color: var(--secondary);
		display: block;
		position: absolute;
		top: 10px;
		left: 10px;
		z-index: -1;

		transition: all 0.2s linear;
		animation: float-ghost 6s ease-in-out infinite;
		animation-delay: ${props => props.animationDelay}s;
	}

	@keyframes float-ghost {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(20px);
		}
		100% {
			transform: translatey(0px);
		}
	}

	@keyframes float {
		0% {
			transform: translatey(0px);
		}
		50% {
			transform: translatey(-20px);
		}
		100% {
			transform: translatey(0px);
		}
	}

	& > img {
		width: 100%;
		z-index: 10;
		vertical-align: middle;
	}
`;

export default function ImageBorder({ children }: ImageProps) {
	return <Wrapper animationDelay={Math.random() * 3}>{children}</Wrapper>;
}
