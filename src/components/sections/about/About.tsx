import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";

import * as css from "./About.module.css";

interface AboutProps {
	title: string;
	subtitle?: string;
	mainText: string;
}

const About: React.FC<AboutProps> = ({ title, subtitle, mainText }) => {
	return (
		<section id="About" className={`section ${css.About}`}>
			<div className={`${css.AboutContent}`}>
				<StaticImage
					src="../../../assets/images/placeholder.jpg"
					alt="placeholder"
					aspectRatio={0.75}
					className={`${css.Image}`}
				/>
				{subtitle ? <h3 className={`${css.Subtitle}`}>{subtitle}</h3> : null}
				<h2 className={`${css.Title}`}>{title}</h2>
				<p>{mainText}</p>
			</div>
		</section>
	);
};

export { About };
