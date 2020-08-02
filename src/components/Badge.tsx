import * as React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div<{ animationDelay: number }>`
	border-radius: 10px;
	color: var(--white);
	background-color: var(--primary);
	box-shadow: 2px 2px var(--secondary);
	margin-right: 4px;
	width: auto;
	display: inline-block;
	padding: 2px 5px;
	font-weight: bolder;
`;

interface BadgeProps {
	text: string;
}

export default function Badge({ text }: BadgeProps) {
	return <Wrapper animationDelay={Math.random() * 10}>{text}</Wrapper>;
}
