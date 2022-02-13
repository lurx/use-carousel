// .storybook/manager.js

import { addons } from '@storybook/addons';
import { themes } from '@storybook/theming';
import UseCarousel from './UseCarousel';

addons.setConfig({
	theme: UseCarousel,
});
