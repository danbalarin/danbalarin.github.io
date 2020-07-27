import React, { ReactElement } from 'react';
import styled from '@emotion/styled';

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.a`
	color: var(--primary);
	text-decoration: none;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 4px 10px;

	&:hover {
		/* background: linear-gradient(transparent, var(--secondary)); */
		/* border: 4px solid var(--primary); */
	}

	/* padding-bottom: 4px; */
	border-bottom: 4px solid var(--primary);
	& > svg {
		font-size: 3em;
	}

	& > span {
		/* padding-top: 4px; */
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
