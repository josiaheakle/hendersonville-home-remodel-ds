import * as React from "react";

import { StaticImage } from "gatsby-plugin-image";

import Content from "../../../../content/Content.json";

import { DownArrow } from "../../../ui/svg-icons/DownArrow";
import { Button } from "../../../ui/buttons/Button";

import * as css from "./Service.module.css";

interface ServiceProps {
	title: string;
	summary: string[];
	additionalText: string[];
}

const Service: React.FC<ServiceProps> = ({
	title,
	summary,
	additionalText,
}) => {
	const phoneNum = Content.contact.phoneNumber;
	return (
		<main className="section">
			<div className={`${css.BgContainer}`}>
				<StaticImage
					className={`${css.BgImage}`}
					layout="fullWidth"
					src="../../../../assets/images/contact.jpg"
					alt=""
				/>
			</div>
			<div className={css.ServiceCard}>
				<a className={css.BackLink} href="/services">
					<DownArrow className={css.BackArrow} />
					All Services
				</a>
				<h1 className={css.Title}>{title}</h1>
				{summary.map((str, i) => (
					<p key={i} className={css.Summary}>
						{str}
					</p>
				))}
				{additionalText.map((str, i) => (
					<p key={i} className={css.AdditionalText}>
						{str}
					</p>
				))}
				<a href={`tel:${phoneNum}`}>
					<Button>Call Now for a Free Quote</Button>
				</a>
			</div>
		</main>
	);
};

export { Service };
