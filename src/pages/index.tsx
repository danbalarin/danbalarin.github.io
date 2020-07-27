import React, { useEffect } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faHome,
	faUser,
	faWindowRestore,
	faMailBulk,
	faChevronDown,
	faChevronUp,
	faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import MonoText from '../components/MonoText';
import AboutMe from './about-me';
import Projects from './projects';
import Contacts from './contacts';

import './index.css';

library.add(
	faHome,
	faUser,
	faWindowRestore,
	faMailBulk,
	faChevronDown,
	faChevronUp,
	faGithub,
	faLinkedin,
	faEnvelope
);

const IndexPage = () => {
	useEffect(() => {
		// document.getElementsByTagName('body')[0].className = 'light';
	});
	return (
		<Layout>
			<SEO title="Home" />
			<MonoText text="<body>" indentation={-2} />
			<AboutMe />
			<Projects />
			<Contacts />
			<MonoText text="</body>" indentation={-2} />
		</Layout>
	);
};

export default IndexPage;
