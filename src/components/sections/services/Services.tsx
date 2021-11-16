import * as React from "react";

import { Button } from "../../ui/buttons/Button";
import { ReadMoreLink } from "../../ui/links/ReadMoreLink";
import { ServiceCard } from "./ServiceCard";

import { ServicesData } from "../../../types/content_types/Services";
import servicesData from "../../../content/Services.json";

import * as css from "./Services.module.css";

interface ServicesProps {
	isOwnPage?: boolean;
}

const Services: React.FC<ServicesProps> = ({ isOwnPage }) => {
	servicesData as ServicesData;
	const content = (
		<>
			<span className={`${css.Subtitle}`}>{servicesData.subtitle}</span>
			{isOwnPage ? (
				<h1 className={`${css.Title}`}>{servicesData.title}</h1>
			) : (
				<h2 className={`${css.Title}`}>{servicesData.title}</h2>
			)}
			<div className={` ${css.ServicesContainer}`}>
				{servicesData.services.map((service, index) => {
					if (!isOwnPage && index > 2) return null;
					console.log({ service, index });
					return (
						<ServiceCard
							className={`${index % 2 === 0 ? "" : css.rightAlign}`}
							key={index}
							isOwnPage={isOwnPage}
							slug={service.slugs ? service.slugs[0] : ""}
							title={service.title}
							summary={service.summary}
							image={service.image}
							src={service.image?.src || ""}
						/>
					);
				})}
			</div>
			{isOwnPage ? null : (
				<a href="/services">
					<Button className={css.ReadMore}>See All</Button>
				</a>
			)}
		</>
	);

	return isOwnPage ? (
		<main id="Services" className={`${css.Services}`}>
			{content}
		</main>
	) : (
		<section id="Services" className={`section ${css.Services}`}>
			{content}
		</section>
	);
};

export { Services };
