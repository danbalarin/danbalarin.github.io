import * as React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.span<{ indentation: number }>`
	margin-left: ${props => props.indentation * 2}em;
	color: var(--mono-text-color);
	font-family: var(--font-mono);
	font-style: italic;
`;

interface MonoTextProps {
	text: string;
	indentation?: number;
}

export default function MonoText({ text, indentation }: MonoTextProps) {
	return <Wrapper indentation={indentation || 0}>{text}</Wrapper>;
}
