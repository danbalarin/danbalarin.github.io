import * as React from 'react';
import styled from '@emotion/styled';

import ImageBorder from './ImageBorder';
import Badge from './Badge';
import { mq } from '../utils';

const ImageColumn = styled.div`
	display: flex;
	flex-direction: column;
	margin-right: 10px;

	& > *:first-of-type {
		margin-bottom: 20px;
	}
`;

const TextColumn = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
`;

const BadgesWrapper = styled.div`
	margin-bottom: 10px;
	display: flex;
	flex-direction: row;
`;

const Wrapper = styled.div<{ right?: boolean }>`
	width: 100%;
	display: flex;
	flex-direction: ${props => (props.right ? 'row-reverse' : 'row')};
	margin-bottom: 20px;
	font-weight: lighter;

	& > ${TextColumn} {
		width: 60%;
		align-items: ${props => (props.right ? 'flex-end' : 'flex-start')};
		text-align: left;
		margin: 0 20px;
		font-size: 14pt;

		& > p {
			width: 60%;
			margin-bottom: 10px;
			&::first-letter {
				font-weight: bolder;
				color: var(--primary);
				font-size: 16pt;
			}
			${mq[1]} {
				width: 100%;
			}
		}
		${mq[0]} {
			width: 100%;
			align-items: flex-start;
			margin: 0;
		}
	}

	& > ${ImageColumn} {
		width: 40%;
		${mq[0]} {
			width: 100%;
		}
	}

	${mq[0]} {
		flex-direction: column;
	}
`;

const AlignedH2 = styled.h2<{ right?: boolean }>`
	text-align: ${props => (props.right ? 'end' : 'start')};
	${mq[0]} {
		text-align: start;
	}
`;

interface ProjectProps {
	image: React.ReactNode;
	heading: string;
	badges: string[];
	children: React.ReactNode;
	right?: boolean;
}

export default function Project({
	image,
	children,
	heading,
	badges,
	right,
}: ProjectProps) {
	return (
		<>
			<AlignedH2 right={right}>{heading}</AlignedH2>
			<Wrapper right={right}>
				<ImageColumn>
					<ImageBorder>{image}</ImageBorder>
				</ImageColumn>
				<TextColumn>
					<BadgesWrapper>
						{badges.map((badge, i) => (
							<Badge text={badge} key={`badge${i}`} />
						))}
					</BadgesWrapper>
					{children}
				</TextColumn>
			</Wrapper>
		</>
	);
}
