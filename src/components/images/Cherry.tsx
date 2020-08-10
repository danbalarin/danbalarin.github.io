import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Recharging = () => {
	const data = useStaticQuery(graphql`
		query {
			mobileImage: file(relativePath: { eq: "projects/cherry.png" }) {
				childImageSharp {
					fluid(maxWidth: 1000, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
			desktopImage: file(relativePath: { eq: "projects/cherry.png" }) {
				childImageSharp {
					fluid(maxWidth: 2000, quality: 100) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const sources = [
		data.mobileImage?.childImageSharp?.fluid,
		{
			...data.desktopImage?.childImageSharp?.fluid,
			media: `(min-width: 768px)`,
		},
	];

	return <Img fluid={sources} />;
};

export default Recharging;
