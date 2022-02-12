import React from 'react';
import { storiesOf } from '@storybook/react';
import useCarousel from './index';
import './use-carousel-story.scss';

const slides = [];

const DemoComponent = () => {
	const {
		carouselRef,
		currentSlide,
		transitionDuration,
		transitionActive,
		registerTransition,
		unregisterTransition,
		gotoNextSlide,
		gotoPrevSlide,
		gotoSlideByIndex,
		PrevSlideButton,
		NextSlideButton,
		CarouselDots,
		// MotionBlurSvg,
	} = useCarousel({
		numberOfSlides: 6,
	});

	return (
		<div className="story">
			<h1>Here is a simple carousel:</h1>
			<div className="wrapper">
				<div className="carousel" onMouseEnter={() => unregisterTransition()} onMouseLeave={() => registerTransition()}>
					<PrevSlideButton />
					<div ref={carouselRef}>
						<div>bla</div>
					</div>
					<NextSlideButton />
				</div>
				<CarouselDots />
			</div>
		</div>
	);
};

storiesOf('useCarousel/example', module).add('Default', () => <DemoComponent />);
