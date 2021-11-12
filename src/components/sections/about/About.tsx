import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { CallNowButton } from "../../ui/buttons/CallNowButton/CallNowButton";

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
	return (
		<section id="About" className={`section ${css.About}`}>
			<div className={`${css.AboutContent}`}>
				{subtitle ? (
					<span className={`${css.Subtitle}`}>{subtitle}</span>
				) : null}
				<h2 className={`${css.Title} title`}>{title}</h2>
				<StaticImage
					src="../../../assets/images/about.jpg"
					alt="placeholder"
					aspectRatio={1.5}
					className={`${css.Image}`}
				/>
				<p>{summary}</p>
				{isOwnPage ? <p>{additionalText}</p> : null}
			</div>
		</section>
	);
};

export { About };
