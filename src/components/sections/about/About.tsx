import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useIsMobile } from "../../../hooks/ReactiveHooks";
import { CallNowButton } from "../../ui/buttons/CallNowButton/CallNowButton";
import { ReadMoreLink } from "../../ui/links/ReadMoreLink";

import * as css from "./About.module.css";

interface AboutProps {
	isOwnPage?: boolean;
	title: string;
	subtitle?: string;
	summary: string;
	additionalText: string;
}

const About: React.FC<AboutProps> = ({
	title,
	subtitle,
	summary,
	additionalText,
	isOwnPage,
}) => {
	const content = (
		<div className={`${css.AboutContent}`}>
			{subtitle ? <span className={`${css.Subtitle}`}>{subtitle}</span> : null}
			<h2 className={`${css.Title} title`}>{title}</h2>
			<StaticImage
				layout="constrained"
				src="../../../assets/images/about.jpg"
				alt="placeholder"
				className={`${css.Image}`}
			/>
			<p>{summary}</p>
			{isOwnPage ? (
				<p>{additionalText}</p>
			) : (
				<div className={`${css.ReadMoreContainer}`}>
					<ReadMoreLink href="/about">Read More</ReadMoreLink>
				</div>
			)}
		</div>
	);

	return isOwnPage ? (
		<main id="About" className={`section ${css.About}`}>
			{content}
		</main>
	) : (
		<section id="About" className={`section ${css.About}`}>
			{content}
		</section>
	);
};

export { About };
