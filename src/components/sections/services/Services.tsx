import * as React from "react";

import servicesData from "../../../content/Services.json";
import {
	Service as ServiceType,
	ServicesData,
} from "../../../types/content_types/Services";
import { Button } from "../../ui/buttons/Button";
import { ReadMoreLink } from "../../ui/links/ReadMoreLink";
import { ServiceCard } from "./ServiceCard";

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
				<h1 className={`title ${css.Title}`}>{servicesData.title}</h1>
			) : (
				<h2 className={`title ${css.Title}`}>{servicesData.title}</h2>
			)}
			<div className={` ${css.ServicesContainer}`}>
				{servicesData.services.map((service, index) => {
					if (!isOwnPage && index > 2) return null;
					return (
						<ServiceCard
							isOwnPage={isOwnPage}
							slug={service.slug}
							title={service.title}
							description={service.summary}
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
		<main id="Services" className={`section ${css.Services}`}>
			{content}
		</main>
	) : (
		<section id="Services" className={`section ${css.Services}`}>
			{content}
		</section>
	);
};

export { Services };
