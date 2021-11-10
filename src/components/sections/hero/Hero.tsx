import * as React from "react";

import * as css from "./Hero.module.css";
import { LearnMoreButton } from "../../ui/buttons/LearnMoreButton.tsx/LearnMoreButton";
import { Image } from "../../../types/content_types/reusable/Image";

interface HeroProps {
	image: Image;
	subtitle: string;
	title: string;
	linkTo?: string; // use # to preface link to element on same page and / for other page
}

const Hero: React.FC<HeroProps> = ({ image, subtitle, title }) => {
	return (
		<div id="Home" className={`${css.Hero} section`}>
			<div className={`${css.HeroBackground}`} />
			{/* <Image className={`${css.HeroImage}`} {...image} /> */}
			<div className={`${css.Content}`}>
				<h2>{subtitle}</h2>
				<h1>{title}</h1>
			</div>
			<LearnMoreButton linkTo="#About" className={`${css.LearnMoreButton}`} />
		</div>
	);
};

export { Hero };
