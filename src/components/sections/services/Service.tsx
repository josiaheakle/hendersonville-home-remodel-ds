import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import * as css from "./Service.module.css";
import { DownArrow } from "../../ui/svg-icons/DownArrow";

interface ServiceProps {
	title: string;
	summary: string;
	additionalText: string;
}

const Service: React.FC<ServiceProps> = ({
	title,
	summary,
	additionalText,
}) => {
	return (
		<main className="section">
			<div className={`${css.BgContainer}`}>
				<StaticImage
					className={`${css.BgImage}`}
					layout="fullWidth"
					src="../../../assets/images/hero.jpg"
					alt=""
				/>
			</div>
			<div className={css.ServiceCard}>
				<a className={css.BackLink} href="/services">
					<DownArrow className={css.BackArrow} />
					All Services
				</a>
				<h1 className={css.Title}>{title}</h1>
				<p className={css.Summary}>{summary}</p>
				<p className={css.AdditionalText}>{additionalText}</p>
			</div>
		</main>
	);
};

export { Service };
