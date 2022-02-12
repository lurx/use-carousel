# useCarousel - Extremely flexible React Hook and components library

## Installation

```npm install @lurx/use-carousel```

or

```yarn add @lurx/use-carosuel```

## Usage
useCarousel Offers you 99% flexibility with how you want to build and design your carousel.
 
### Options

useCarousel only requires one value passed to work: `numberOfSlides`. Without it, it will return `null`.
Here are the options you can pass, with their default values. Note That `numberOfSlides` has to be a `number` larger than `0`
```js
const carouselSettings = {
  numberOfSlides: 0,        // REQUIRED. Must be x > 0.
  nextSlideInterval: 5000,  // Interval between slide changes (ms)
  transitionDuration: 500   // The duration of slide changes (ms)
}
```

### Returns
useCarousel returns these values for you to use when you build your carousel:

```js
return {
  carouselRef,  // React Ref. use this on your carousel container
  currentSlide,  // number. The current slide number (1...[lenght])
  transitionDuration,  // number the transition duration
  transitionActive,   // Boolean.  
  transitionStyle,  // style object for animations
  registerTransition,  // initiate auto slide change
  unregisterTransition, // stop auto slide change
  gotoNextSlide, // function.
  gotoPrevSlide, // function
  gotoSlideByIndex, // function
  PrevSlideButton, // Component. props: children
  NextSlideButton,  // Component. props: children
  CarouselDots,  // Component, carousel dots.
  MotionBlurEffect, // SVG Component for blur effect
}
```

### Example
```jsx
import { useCarousel } from "@lurx/use-carousel";

const myComponentName = () => {
  const {
    carouselRef, 
    transitionActive,
    transitionStyle,
    registerTransition,
    unregisterTransition,
    PrevSlideButton,
    NextSlideButton,
    CarouselDots,
    MotionBlurEffect,
  } = useCarousel({
    numberOfSlides: slides.length,
  });
  
  return (
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
	);
}
```
As you can see in the code above, this demo is not using all the possible elements, but we end up with a simple carousel, with the freedom to choose the layout and design for the desired carousel look. 
### Demo

[CodeSandbox](http://www.google.com)