import * as React from "react";

import { LearnMoreButton } from "../../ui/buttons/LearnMoreButton.tsx/LearnMoreButton";
import { StaticImage } from "gatsby-plugin-image";
import { CallNowButton } from "../../ui/buttons/CallNowButton/CallNowButton";

import * as css from "./Hero.module.css";

import { useIsMobile } from "../../../hooks/ReactiveHooks";

import { Image } from "../../../types/content_types/reusable/Image";

interface HeroProps {
	image: Image;
	subtitle: string;
	title: string;
	linkTo?: string; // use # to preface link to element on same page and / for other page
}

const Hero: React.FC<HeroProps> = ({ image, subtitle, title }) => {
	const isMobile = useIsMobile();

	return (
		<div id="Home" className={`${css.Hero} section`}>
			<div className={`${css.ContentContainer}`}>
				<div className={`${css.BgImage}`}>
					<StaticImage
						className={`${css.HeroImage}`}
						layout="fullWidth"
						src="../../../assets/images/hero.jpg"
						alt=""
					/>
				</div>
				<div className={`${css.Content}`}>
					<span className={`${css.Subtitle}`}>{subtitle}</span>
					<h1 className={`${css.Title}`}>{title}</h1>
					<CallNowButton />
				</div>
				{/* {!isMobile ? <ContactForm className={`${css.ContactForm}`} /> : null} */}
			</div>
			<LearnMoreButton linkTo="#About" className={`${css.LearnMoreButton}`} />
		</div>
	);
};

export { Hero };
