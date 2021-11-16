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
	summary: [string];
	additionalText: [string];
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
			<h2 className={`${css.Title}`}>{title}</h2>
			<StaticImage
				layout="constrained"
				src="../../../assets/images/about.jpg"
				alt="placeholder"
				className={`${css.Image}`}
			/>
			{summary.map((para, i) => (
				<p className={`${css.Paragraph}`} key={i}>
					{para}
				</p>
			))}

			{isOwnPage ? (
				additionalText.map((para, i) => (
					<p className={`${css.Paragraph}`} key={i}>
						{para}
					</p>
				))
			) : (
				<div className={`${css.ReadMoreContainer}`}>
					<ReadMoreLink title="About Page" href="/about">
						More About Us
					</ReadMoreLink>
				</div>
			)}
		</div>
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
};

export { About };
