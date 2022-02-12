// import React from 'react';
// import { render } from '@testing-library/react';
//
// import useCarousel from './use-carousel';
//
// describe('Button', () => {
// 	test('renders a Carousel using use-carousel', () => {
// 		const {
// 			carouselRef,
// 			currentSlide,
// 			transitionDuration,
// 			transitionActive,
// 			registerTransition,
// 			unregisterTransition,
// 			gotoNextSlide,
// 			gotoPrevSlide,
// 			gotoSlideByIndex,
// 			PrevSlideButton,
// 			NextSlideButton,
// 			CarouselDots,
// 			// MotionBlurSvg,
// 		} = useCarousel({
// 			numberOfSlides: 6,
// 		});
//
// 		render(
// 			<div className="story">
// 				<h1>Here is a simple carousel:</h1>
// 				<div className="wrapper">
// 					<div
// 						className="carousel"
// 						onMouseEnter={() => unregisterTransition()}
// 						onMouseLeave={() => registerTransition()}
// 					>
// 						<PrevSlideButton />
// 						<div ref={carouselRef}>
// 							<div>bla</div>
// 						</div>
// 						<NextSlideButton />
// 					</div>
// 					<CarouselDots />
// 				</div>
// 			</div>,
// 		);
// 	});
// });
