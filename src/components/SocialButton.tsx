import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.a`
	color: var(--primary);
	position: relative;
	text-decoration: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 4px 10px;

	&:after {
		transition: all 0.3s ease-in-out;
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		height: 4px;
		width: 0%;
		background: var(--primary);
	}

	&:hover {
		&:after {
			width: 100%;
			left: 0%;
		}
	}

	& > svg {
		font-size: 3em;
	}

	& > span {
		font-size: 1em;
	}
`;

interface SocialButtonProps {
	icon: ['fab', 'github'] | ['fab', 'linkedin'] | 'envelope';
	text: React.ReactNode;
	link: string;
}

function SocialButton({ icon, text, link }: SocialButtonProps): ReactElement {
	return (
		<Wrapper href={link} target="_blank">
			<Icon icon={icon} />
			<span>{text}</span>
		</Wrapper>
	);
}

export default SocialButton;
