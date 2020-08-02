import React from 'react';
import styled from '@emotion/styled';

import FuzzyWord from '../components/FuzzyWord';
import ImageBorder from '../components/ImageBorder';
import MonoText from '../components/MonoText';
import ProfilePic from '../components/images/Profile';

const LogoWrapper = styled.div`
	position: absolute;
	right: 12vw;
	top: 1vw;
	transform: rotate(-10deg);
	width: 30vw;
`;

const ImageWrapper = styled.div`
	width: 300px;
	height: 300px;
	margin-bottom: 40px;
`;

const HeadingWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	/* color: var(--primary); */
`;

const AboutMe = () => {
	return (
		<div id="about-me">
			<MonoText text="<AboutMe>" indentation={0} />
			<HeadingWrapper>
				<ImageWrapper>
					<ImageBorder>
						<ProfilePic />
					</ImageBorder>
				</ImageWrapper>
				<h1>Dan Balarin</h1>
				<h2>Frontend developer, software enthusiast</h2>
			</HeadingWrapper>
			<LogoWrapper>
				<FuzzyWord word="DB" />
			</LogoWrapper>

			<MonoText text="</AboutMe>" indentation={0} />
		</div>
	);
};

export default AboutMe;
