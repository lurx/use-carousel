import React from 'react';

const MotionBlurEffect = (props: React.SVGProps<SVGSVGElement>) => (
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="0" height="0" viewBox="0 0 1366 768">
		<defs>
			<filter id="blur0">
				<feGaussianBlur in="SourceGraphic" stdDeviation="0 0" />
			</filter>
			<filter id="blur1">
				<feGaussianBlur in="SourceGraphic" stdDeviation="5 0" />
			</filter>
			<filter id="blur2">
				<feGaussianBlur in="SourceGraphic" stdDeviation="12 0" />
			</filter>
			<filter id="blur3">
				<feGaussianBlur in="SourceGraphic" stdDeviation="20 0" />
			</filter>
			<filter id="blur4">
				<feGaussianBlur in="SourceGraphic" stdDeviation="35 1" />
			</filter>
			<filter id="blur5">
				<feGaussianBlur in="SourceGraphic" stdDeviation="50 1" />
			</filter>
		</defs>
	</svg>
);
export default MotionBlurEffect;
