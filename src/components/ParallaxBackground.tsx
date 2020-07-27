import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

import Shape from './Shape';

const PARALLAX_MAX = 50;
const PARALLAX_LAYER_DIFFERENCE = 0.5;

const TRIANGLE_THRESSHOLD = 4;
const RECTANGLE_THRESSHOLD = 7;
const TRIANGLE_PRESETS = [
	{ type: 'triangle', variant: 0 },
	{ type: 'triangle', variant: 1 },
	{ type: 'triangle', variant: 2 },
	{ type: 'triangle', variant: 3 },
];
const CIRCLE_PRESETS = [{ type: 'circle' }];
const RECTANGLE_PRESETS = [
	{ type: 'rectangle', variant: 0 },
	{ type: 'rectangle', variant: 1 },
];

const PRIMARY_THRESSHOLD = 4;
const SECONDARY_THRESSHOLD = 8;

const Wrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 0;
	overflow: hidden;
`;

const ParallaxBackground = ({}) => {
	return (
		<Wrapper>
			<ParallaxLayer order={0} count={20} />
			<ParallaxLayer order={1} count={20} />
			<ParallaxLayer order={2} count={20} />
		</Wrapper>
	);
};

const ScaleWrapper = styled.div<{ scale: number }>`
	display: inline-block;
	position: absolute;
	transform: scale(${props => props.scale});
	opacity: ${props => props.scale * 0.8};
`;

interface ParallaxLayer extends React.HTMLAttributes<HTMLDivElement> {
	order: number;
	count: number;
}

const ParallaxLayer = ({ order, count }: ParallaxLayer) => {
	const [layerX, setLayerX] = useState(0);
	const [layerY, setLayerY] = useState(0);
	const [shapes, setShapes] = useState([]);

	const generateShapes = () => {
		const res = [];
		for (let i = 0; i < count; ++i) {
			const color = randomColor();
			const shape = randomShape();
			const x =
				Math.random() * (document.documentElement.clientWidth - 40) +
				20;
			const y = Math.random() * (document.body.clientHeight - 40) + 20;
			const rotation = Math.random() * 360;
			res.push({ color, ...shape, x, y, rotation });
		}
		setShapes(res);
	};

	const onMouseMove = ({ clientX, clientY }: any) => {
		const clientWidth = document.documentElement.clientWidth;
		const signX = clientX > clientWidth / 2 ? 1 : -1;
		const distanceX = Math.abs(clientWidth / 2 - clientX);
		const ratioX = (distanceX / clientWidth) * 2;

		const clientHeight = document.documentElement.clientHeight;
		const signY = clientY > clientHeight / 2 ? 1 : -1;
		const distanceY = Math.abs(clientHeight / 2 - clientY);
		const ratioY = (distanceY / clientHeight) * 2;

		setLayerX(
			signX *
				ratioX *
				PARALLAX_MAX *
				PARALLAX_LAYER_DIFFERENCE *
				(3 - order)
		);
		setLayerY(
			signY *
				ratioY *
				PARALLAX_MAX *
				PARALLAX_LAYER_DIFFERENCE *
				(3 - order)
		);
	};

	useEffect(() => {
		// document.addEventListener('mousemove', onMouseMove);
		generateShapes();
		// return () => {
		// 	document.removeEventListener('mousemove', onMouseMove);
		// };
	}, []);

	return (
		<div
			onMouseMove={onMouseMove}
			style={{ transform: `translate(${layerX}px, ${layerY}px)` }}
		>
			{shapes.map(({ x, y, rotation, ...shapeProps }, i) => (
				<div
					style={{
						top: y,
						left: x,
						transform: `rotateZ(${rotation}deg)`,
						position: 'absolute',
					}}
					key={`shape${i}${x}`}
				>
					<ScaleWrapper scale={Math.pow(3 / 4, order + 1)}>
						<Shape {...shapeProps} />
					</ScaleWrapper>
				</div>
			))}
		</div>
	);
};

function randomShape() {
	const shapeRnd = Math.random() * 10;
	if (shapeRnd <= TRIANGLE_THRESSHOLD) {
		return randomFromArr(TRIANGLE_PRESETS);
	} else if (shapeRnd <= RECTANGLE_THRESSHOLD) {
		return randomFromArr(RECTANGLE_PRESETS);
	}
	return randomFromArr(CIRCLE_PRESETS);
}

function randomColor(): 'primary' | 'secondary' | 'white' {
	const colorRnd = Math.random() * 10;
	if (colorRnd <= PRIMARY_THRESSHOLD) {
		return 'primary';
	} else if (colorRnd <= SECONDARY_THRESSHOLD) {
		return 'secondary';
	}
	return 'white';
}

function randomFromArr<T>(arr: T[]): T {
	if (arr.length === 1) {
		return arr[0];
	}
	const arrRnd = Math.floor(Math.random() * arr.length);
	return arr[arrRnd];
}

export default ParallaxBackground;
