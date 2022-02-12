import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

//icons
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/solid';

// effects
import MotionBlurEffect from '../../assets/effects/motion-blur';

//styles
import './use-carousel.scss';

const NEXT_SLIDE_INTERVAL = 5000;
const TRANSITION_DURATION = 500;
const NUMBER_OF_SLIDES = 0;

const useCarousel = ({
	numberOfSlides = NUMBER_OF_SLIDES,
	nextSlideInterval = NEXT_SLIDE_INTERVAL,
	transitionDuration = TRANSITION_DURATION,
}) => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [transitionActive, setTransitionActive] = useState(false);
	const lastSlide = numberOfSlides - 1;
	const carouselRef = useRef<HTMLDivElement>(null);

	const transitionStyle = {
		transition: `${transitionDuration}ms transform ease-in-out`,
		transform: `translateX(calc(${currentSlide} * -100%))`,
	};

	const useSlideTransition = (nextSlide: Function) => {
		let timer = setTimeout(() => null, 0);

		const registerTransition = () => {
			clearTimeout(timer);
			timer = setTimeout(() => nextSlide(), nextSlideInterval);
		};

		const unregisterTransition = () => {
			clearTimeout(timer);
		};

		useEffect(() => {
			registerTransition();
			return () => unregisterTransition();
		});

		return { registerTransition, unregisterTransition };
	};

	const gotoNextSlide = () => {
		setTransitionActive(true);
		if (currentSlide < lastSlide) {
			setCurrentSlide(currentSlide + 1);
		} else {
			setCurrentSlide(0);
		}
		setTransitionActive(false);
	};

	const gotoPrevSlide = () => {
		setTransitionActive(true);
		if (currentSlide > 0) {
			setCurrentSlide(currentSlide - 1);
		} else {
			setCurrentSlide(lastSlide);
		}
		setTransitionActive(false);
	};

	const gotoSlideByIndex = (index: number) => setCurrentSlide(index);

	const PrevSlideButton = () => {
		return (
			<button type="button" className={classnames('use-carousel-button')} onClick={gotoPrevSlide}>
				<ArrowNarrowLeftIcon className="arrow" />
			</button>
		);
	};
	const NextSlideButton = () => {
		return (
			<button type="button" className={classnames('use-carousel-button')} onClick={gotoNextSlide}>
				<ArrowNarrowRightIcon className="arrow" />
			</button>
		);
	};

	const CarouselDots = () => {
		return (
			<div className="use-carousel-dots-wrapper">
				{[...Array(numberOfSlides).keys()].map((dot, index) => (
					<button
						type="button"
						key={`dot-${index}`}
						className={classnames('use-carousel-dot', {
							active: currentSlide === index,
						})}
						onClick={() => gotoSlideByIndex(index)}
					/>
				))}
			</div>
		);
	};

	const { registerTransition, unregisterTransition } = useSlideTransition(gotoNextSlide);

	window.addEventListener('transitionstart', () => {
		setTransitionActive(true);
	});

	window.addEventListener('transitionend', () => {
		setTransitionActive(false);
	});

	return {
		carouselRef,
		currentSlide,
		transitionDuration,
		transitionStyle,
		transitionActive,
		registerTransition,
		unregisterTransition,
		gotoNextSlide,
		gotoPrevSlide,
		gotoSlideByIndex,
		PrevSlideButton,
		NextSlideButton,
		CarouselDots,
		MotionBlurEffect,
	};
};

export default useCarousel;
