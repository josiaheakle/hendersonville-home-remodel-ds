import * as React from "react";
import Image from "gatsby-plugin-sanity-image";

import * as css from "./Hero.module.css";
import { LearnMoreButton } from "../../ui/buttons/LearnMoreButton.tsx/LearnMoreButton";

interface HeroProps {
	image: {
		asset: any;
		hotspot: any;
		crop: any;
		width: any;
		height: any;
		options?: {} | undefined;
		config?: {} | undefined;
		__typename: any;
		_type: any;
		_key: any;
		sources: any;
	};
	subtitle: string;
	title: string;
	linkTo?: string; // use # to preface link to element on same page and / for other page
}

const Hero: React.FC<HeroProps> = ({ image, subtitle, title }) => {
	return (
		<div className={`${css.Hero} section`}>
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
