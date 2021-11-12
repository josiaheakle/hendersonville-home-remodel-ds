import * as React from "react";

import servicesData from "../../../content/Services.json";
import { ServicesData } from "../../../types/content_types/Services";
import { ReadMoreLink } from "../../ui/links/ReadMoreLink";
import { ServiceCard } from "./ServiceCard";

import * as css from "./Services.module.css";

interface ServicesProps {
	isOwnPage: boolean;
}

const Services: React.FC<ServicesProps> = ({ isOwnPage }) => {
	servicesData as ServicesData;
	return (
		<section
			id="Services"
			className={`${css.Services} ${isOwnPage ? "page" : "section"}`}
		>
			<span className={`${css.Subtitle}`}>{servicesData.subtitle}</span>
			<h2 className={`title ${css.Title}`}>{servicesData.title}</h2>
			<div className={` ${css.ServicesContainer}`}>
				{servicesData.services.map((service, index) => {
					if (!isOwnPage && index > 2) return null;
					return (
						<ServiceCard title={service.title} description={service.summary} />
					);
				})}
				{isOwnPage ? null : (
					<ReadMoreLink href="/services">See All</ReadMoreLink>
				)}
			</div>
		</section>
	);
};

export { Services };
