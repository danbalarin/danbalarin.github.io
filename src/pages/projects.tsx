import * as React from 'react';
import styled from '@emotion/styled';

import Project from '../components/Project';
import MonoText from '../components/MonoText';
import RechargingPic from '../components/images/Recharging';
import UlsPic from '../components/images/Uls';
import CherryPic from '../components/images/Cherry';

const Wrapper = styled.div``;

export default function Projects() {
	return (
		<div id="projects">
			<MonoText text="<Projects>" indentation={0} />
			<Project
				image={<RechargingPic />}
				heading="Smart Pub"
				badges={['React', 'Redux', 'Redux Thunk', 'REST']}
			>
				<p>
					Project that focuses on gamification of student pubs via
					games and events. I'm responsible for frontend architecture,
					web administration and some of those games, that are
					displayed in live in pub.
				</p>
				<p>
					Technology stack is React with React Redux and Thunk for
					local state and generated REST API interface thanks to
					Swagger. I also setted up Eureka and Swagger server in our
					microservice architecture.
				</p>
			</Project>
			<Project
				image={<CherryPic />}
				heading="Barmans cheatsheet"
				badges={['React', 'REST']}
				right={true}
			>
				<p>
					Simple application that helps newbie barmans know what type
					of glass to use, what are the ingredients, what type of
					shake, garnish, etc.
				</p>
			</Project>
			<Project
				image={<UlsPic />}
				heading="Ukulele learning site"
				badges={[
					'React',
					'NodeJS',
					'SSR',
					'GraphQL',
					'Apollo local state',
				]}
			>
				<p>
					Ukulele learning site is working name for application for my
					bacheleors thesis. It focuses on easy interface and haveing
					all functionalities that have existing applications spread
					between themselves.
				</p>
				<p>
					Frontend of the application is NRG stack with Apollo Client
					and Node, GraphQL and Apollo Server for backend. Application
					is divided into independent modules based on bussines
					domains.
				</p>
			</Project>
			<MonoText text="</Projects>" indentation={0} />
		</div>
	);
}

// Smart pub
// TAGS: React, Redux, Redux Thunk, REST
// Project that focuses on gamification of student pubs via games and events. I'm responsible for frontend architecture, web administration and some of those games, that are displayed in live in pub. Technology stack is React with React Redux and Thunk for local state and generated REST API interface thanks to Swagger. I also setted up Eureka and Swagger server in our microservice architecture.
