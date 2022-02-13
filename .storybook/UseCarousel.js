// .storybook/YourTheme.js

import { create } from '@storybook/theming';
import useCarouselLogo from './useCarousel.png';

export default create({
	base: 'dark',
	brandTitle: 'use-carousel storybook',
	brandUrl: 'https://github.com/lurx/use-carousel',
	brandImage: useCarouselLogo,
});
