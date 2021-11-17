import * as React from 'react';
import { CallNowButton } from '../../ui/buttons/CallNowButton/CallNowButton';

import * as css from "./Location.module.css";

interface LocationProps {
    isOwnPage : boolean;
}

const Location: React.FC<LocationProps> = ({isOwnPage}) => {
    const content = (

    );
	return isOwnPage ? (
		<main id="About" className={`${css.About}`}>
			{content}
		</main>
	) : (
		<section id="About" className={`section ${css.About}`}>
			{content}
		</section>
	);
}

export {Location};