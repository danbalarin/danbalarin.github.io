import * as React from 'react';
import styled from '@emotion/styled';

type Colors = 'primary' | 'secondary' | 'white';
type Shapes = 'circle' | 'triangle' | 'rectangle';

const SvgWrapper = styled.svg`
	transform: rotateZ(0deg);
	fill: transparent;
	stroke-width: 6px;
	stroke-linejoin: round;
	animation: float-shape 6s ease-in-out infinite;

	@keyframes float-shape {
		0% {
			transform: translate(0px, 0px);
		}
		50% {
			transform: translate(-10px, -10px);
		}
	}
`;

interface ShapeProps {
	type: Shapes;
	variant?: number;
	color?: Colors;
}

const TRIANGLES = [
	'10,10 10,80 50,45',
	'10,10 10,60 80,50',
	'10,10 10,80 80,10',
	'10,10 40,80 90,10',
];

const RECTANGLES = ['10,10 10,80 80,80 80,10', '10,20 10,60 90,60 90,20'];

export default function Shape({ type, variant, color }: ShapeProps) {
	const finalColor = `var(--${color || 'secondary'})`;
	switch (type) {
		case 'circle':
			return <Circle radius={40} color={finalColor} />;
		case 'rectangle':
			checkVariant(RECTANGLES.length - 1, variant);
			return (
				<Polygon points={RECTANGLES[variant || 0]} color={finalColor} />
			);
		case 'triangle':
			checkVariant(TRIANGLES.length - 1, variant);
			return (
				<Polygon points={TRIANGLES[variant || 0]} color={finalColor} />
			);
		default:
			return <></>;
	}
}

const checkVariant = (max: number, given?: number) => {
	if ((given !== 0 && !given) || given < 0 || given > max) {
		throw new Error(
			`Variant out of bounds, min 0, max ${max}, given ${given}`
		);
	}
};

interface PolygonProps {
	color: string;
	points: string;
}

function Polygon({ color, points }: PolygonProps) {
	return (
		<SvgWrapper height="90" width="100" stroke={color}>
			<polygon points={points} />
		</SvgWrapper>
	);
}

interface CircleProps {
	color: string;
	radius: number;
}

function Circle({ color, radius }: CircleProps) {
	return (
		<SvgWrapper height="90" width="100" stroke={color}>
			<circle cx="50" cy="45" r={radius} />
		</SvgWrapper>
	);
}
