import * as React from 'react';
import styled from '@emotion/styled';

import MonoText from '../components/MonoText';
import SocialButton from '../components/SocialButton';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	& > a {
		margin: 0 10px;
	}
`;

export default function Contacts() {
	return (
		<div id="contacts">
			<MonoText text="<Contacts>" indentation={0} />
			<br />
			<Wrapper>
				<SocialButton
					icon={['fab', 'github']}
					text="danbalarin"
					link="https://github.com/danbalarin"
				/>
				<SocialButton
					icon={['fab', 'linkedin']}
					text="dan-balarin"
					link="https://www.linkedin.com/in/dan-balarin/"
				/>
				<SocialButton
					icon="envelope"
					text="Email me"
					link="mailto:dan.balarin@gmail.com"
				/>
			</Wrapper>
			<br />
			<MonoText text="</Contacts>" indentation={0} />
		</div>
	);
}
