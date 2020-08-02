/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import styled from '@emotion/styled';

import Menu from './MenuAnimeVertical';
import ParallaxBackground from './ParallaxBackground';

import './layout.css';

const MenuWrapper = styled.div`
	position: fixed;
	right: 10px;
	top: 50%;
	transform: translateY(-50%);
	z-index: 100;
`;

type LayoutProps = {
	children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<ParallaxBackground />
			<main style={{ zIndex: 10, position: 'relative' }}>{children}</main>
			<MenuWrapper>
				<Menu
					items={[
						{ icon: 'user', link: '#about-me' },
						{ icon: 'window-restore', link: '#projects' },
						{ icon: 'mail-bulk', link: '#contacts' },
					]}
				/>
			</MenuWrapper>
		</>
	);
};

export default Layout;
