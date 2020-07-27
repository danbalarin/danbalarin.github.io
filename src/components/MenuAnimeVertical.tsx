import React, { useEffect } from 'react';
import anime from 'animejs';
import styled from '@emotion/styled';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';

const POPUP_TIME = 150;
const MOVE_SHADOW_TIME = 400;

const Wrapper = styled.div`
	position: relative;
	display: inline-flex;
	flex-direction: column;
	background-color: rgba(255, 255, 255, 0.2);
	border-radius: var(--menu-border-radius);
	justify-content: center;
	align-items: center;
	width: auto;
`;

function usePrevious<T>(value: T): T {
	const ref = React.useRef<T>();
	React.useEffect(() => {
		(ref.current as any) = value;
	});
	return ref.current as T;
}

const fwRef = React.forwardRef<HTMLDivElement, MenuProps>(Menu);

export default fwRef;

export interface MenuForwardProps {
	setActive: (index: number) => void;
}

interface MenuItem {
	link: string;
	icon: IconProp;
}

interface MenuProps {
	items: MenuItem[];
}

function Menu({ items }: MenuProps, ref: React.Ref<any>) {
	const [active, setActive] = React.useState(0);
	const [manualScroll, setManualScroll] = React.useState(false);
	const prevActive = usePrevious(active);
	const itemRefs = React.useRef<any>([]);
	const lastAnimationIdRef = React.useRef<number>(0);

	React.useImperativeHandle(ref, () => ({
		setActive: setActive,
	}));

	const handleScroll = e => {
		if (manualScroll) {
			return;
		}
		for (let i = items.length - 1; i >= 0; --i) {
			const item = items[i];
			const offset = document.getElementById(item.link.split('#')[1])
				?.offsetTop;
			if (window.pageYOffset >= offset) {
				if (i !== active) {
					setActive(i);
				}
				return;
			}
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	// Shows newly selected item
	React.useEffect(() => {
		(async () => {
			anime.remove(itemRefs.current[prevActive]);

			const id = Math.random();
			lastAnimationIdRef.current = id;

			setManualScroll(true);

			await animateHide(itemRefs.current[prevActive]).finished;

			if (lastAnimationIdRef.current !== id) {
				setManualScroll(false);
				return;
			}

			await animateShow(itemRefs.current[active]).finished;

			setManualScroll(false);
		})();
	}, [active]);

	const buttonClick = (to: number) => (e: any) => {
		e.preventDefault();
		setActive(to);
		document.querySelector(e.target.closest('a').hash).scrollIntoView({
			behavior: 'smooth',
		});
	};

	return (
		<Wrapper>
			{items.map((item, index) => (
				<MenuItem
					ref={el => (itemRefs.current[index] = el)}
					key={index}
					href={item.link}
					active={index === active}
					onClick={buttonClick(index)}
					count={items.length}
					index={index}
				>
					<Icon icon={item.icon} />
				</MenuItem>
			))}
			<AnimationHolder count={items.length} activeIndex={active} />
		</Wrapper>
	);
}

const animateHide = (target: any) =>
	anime({
		targets: target,
		duration: POPUP_TIME,
		keyframes: [
			{ translateX: 0 },
			{
				background: 'rgba(255,255,255, 0)',
				delay: POPUP_TIME / 2,
			},
		],
	});

const animateShow = (target: any) =>
	anime({
		targets: target,
		keyframes: [{ background: 'var(--primary) ' }, { translateX: -5 }],
		duration: POPUP_TIME,
		delay: MOVE_SHADOW_TIME,
	});

const MenuItem = styled.a<{ active: boolean; count: number; index: number }>`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	z-index: 10;
	position: relative;
	vertical-align: center;
	font-size: 1.5em;

	color: var(--white);
	padding: var(--menu-item-padding);
	border-radius: var(--menu-border-radius);
	height: ${props => 100 / props.count}%;
	transition: all ${POPUP_TIME}ms linear;
	outline: 0;

	& > * {
		width: var(--icon-size) !important;
		height: var(--icon-size);
	}
`;

const AnimationHolder = styled.div<{ activeIndex: number; count: number }>`
	position: absolute;
	width: 100%;
	z-index: 0;

	border-radius: var(--menu-border-radius);

	background-color: var(--secondary);
	transition: all ease ${MOVE_SHADOW_TIME}ms;
	transition-delay: ${POPUP_TIME}ms;
	top: ${props => (props.activeIndex * 100) / props.count}%;
	height: calc(100% / ${props => props.count});
`;
