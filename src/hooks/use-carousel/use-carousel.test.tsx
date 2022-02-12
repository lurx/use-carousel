import React from 'react';
import { render } from '@testing-library/react';

import useCarousel from './use-carousel';
import classnames from 'classnames';

const slides = [
	'https://www.fillmurray.com/400/300',
	'https://loremflickr.com/400/300',
	'https://placebeard.it/400x300',
	'https://placekitten.com/400/300',
];

const TestComponent = () => {
	const {
		carouselRef,
		currentSlide,
		transitionDuration,
		transitionActive,
		transitionStyle,
		registerTransition,
		unregisterTransition,
		gotoNextSlide,
		gotoPrevSlide,
		gotoSlideByIndex,
		PrevSlideButton,
		NextSlideButton,
		CarouselDots,
		MotionBlurEffect,
	} = useCarousel({
		numberOfSlides: slides.length,
	});

	return (
		<div className="story">
			<h1>Here is a simple carousel:</h1>
			<div className="wrapper">
				<MotionBlurEffect />
				<div className="carousel" onMouseEnter={() => unregisterTransition()} onMouseLeave={() => registerTransition()}>
					<PrevSlideButton />
					<div className="carousel-box">
						<div
							ref={carouselRef}
							className={classnames('slides-box', { 'animate-motion-blur': transitionActive })}
							style={transitionStyle}
						>
							{slides.map((slide, index) => (
								<div key={`slide-${index}`} className="slide">
									<img src={slide} alt={`slide demo #${index}`} />
								</div>
							))}
						</div>
					</div>
					<NextSlideButton />
				</div>
				<CarouselDots />
			</div>
		</div>
	);
};

describe('Button', () => {
	test('renders a Carousel using use-carousel', () => {
		render(<TestComponent />);
	});
});
