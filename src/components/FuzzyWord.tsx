import * as React from 'react';
import styled from '@emotion/styled';

import { mq } from '../utils';

interface FuzzyWordProps {
	word: string;
}

const FuzzyWordSvg = styled.svg`
	fill: var(--primary);
	font-size: 7em;
	font-weight: bold;
	letter-spacing: -0.3em;
	text-align: center;

	${mq[0]} {
		font-size: 8em;
		padding-top: 0.5em;
	}
`;
const FuzzyWordSvgText = styled.text`
	fill: none;
	stroke: var(--white);
	stroke-width: 2px;

	animation: dash 5s 1;
	stroke-linecap: round;
	stroke-miterlimit: 10;
	stroke-dasharray: 350;
	stroke-dashoffset: 350;
	animation-fill-mode: forwards;

	animation-name: draw, fill, create-shadow, set-glitch;
	animation-duration: 5s, 1.5s, 0.3s, 0.1s;
	animation-delay: 0ms, 4.5s, 5.5s, 7s;
	animation-timing-function: ease-in, ease-out, linear, linear;
	animation-iteration-count: 1, 1, 1, 1;
	text-shadow: 0.01px 0.01px var(--secondary);
	transform: translate(0.01px, 0.01px);

	@keyframes draw {
		to {
			stroke-dashoffset: 0;
		}
	}

	@keyframes fill {
		to {
			stroke-width: 0px;
			fill: var(--primary);
		}
	}

	@keyframes create-shadow {
		to {
			text-shadow: 5px 5px var(--secondary);
			transform: translate(-5px, -5px);
		}
	}

	@keyframes set-glitch {
		to {
			filter: url('#glitch');
		}
	}
`;

export default function FuzzyWord({ word }: FuzzyWordProps) {
	return (
		<FuzzyWordSvg viewBox="10 -10 190 140">
			<FuzzyWordSvgText
				x="50%"
				y="50%"
				dominantBaseline="middle"
				textAnchor="middle"
			>
				{word}
			</FuzzyWordSvgText>

			<filter id="glitch">
				<feFlood floodColor="var(--secondary)" result="flood1" />
				<feFlood floodColor="var(--primary)" result="flood2" />
				<feOffset in="SourceGraphic" dx="3" dy="0" result="off1a" />
				<feOffset in="SourceGraphic" dx="2" dy="0" result="off1b" />
				<feOffset in="SourceGraphic" dx="-3" dy="0" result="off2a" />
				<feOffset in="SourceGraphic" dx="-2" dy="0" result="off2b" />
				<feComposite
					in="flood1"
					in2="off1a"
					operator="in"
					result="comp1"
				/>
				<feComposite
					in="flood2"
					in2="off2a"
					operator="in"
					result="comp2"
				/>

				<feMerge x="0" width="100%" result="merge1">
					<feMergeNode in="comp1" />
					<feMergeNode in="off1b" />

					<animate
						attributeName="y"
						id="y"
						dur="4s"
						values="104px; 104px; 30px; 105px; 30px; 2px; 2px; 50px; 40px; 105px; 105px; 20px; 6ßpx; 40px; 104px; 40px; 70px; 10px; 30px; 104px; 102px"
						keyTimes="0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1"
						repeatCount="indefinite"
					/>

					<animate
						attributeName="height"
						id="h"
						dur="4s"
						values="10px; 0px; 10px; 30px; 50px; 0px; 10px; 0px; 0px; 0px; 10px; 50px; 40px; 0px; 0px; 0px; 40px; 30px; 10px; 0px; 50px"
						keyTimes="0; 0.362; 0.368; 0.421; 0.440; 0.477; 0.518; 0.564; 0.593; 0.613; 0.644; 0.693; 0.721; 0.736; 0.772; 0.818; 0.844; 0.894; 0.925; 0.939; 1"
						repeatCount="indefinite"
					/>
				</feMerge>

				<feMerge
					x="0"
					width="100%"
					y="60px"
					height="65px"
					result="merge2"
				>
					<feMergeNode in="black" />
					<feMergeNode in="comp2" />
					<feMergeNode in="off2b" />

					<animate
						attributeName="y"
						id="y"
						dur="4s"
						values="103px; 104px; 69px; 53px; 42px; 104px; 78px; 89px; 96px; 100px; 67px; 50px; 96px; 66px; 88px; 42px; 13px; 100px; 100px; 104px;"
						keyTimes="0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513; 0.548; 0.577; 0.613; 1"
						repeatCount="indefinite"
					/>

					<animate
						attributeName="height"
						id="h"
						dur="4s"
						values="0px; 0px; 0px; 16px; 16px; 12px; 12px; 0px; 0px; 5px; 10px; 22px; 33px; 11px; 0px; 0px; 10px"
						keyTimes="0; 0.055; 0.100; 0.125; 0.159; 0.182; 0.202; 0.236; 0.268; 0.326; 0.357; 0.400; 0.408; 0.461; 0.493; 0.513;  1"
						repeatCount="indefinite"
					/>
				</feMerge>

				<feMerge>
					<feMergeNode in="SourceGraphic" />

					<feMergeNode in="merge1" />
					<feMergeNode in="merge2" />
				</feMerge>
			</filter>
		</FuzzyWordSvg>
	);
}
