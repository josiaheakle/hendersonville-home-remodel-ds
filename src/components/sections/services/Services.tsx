import * as React from "react";

import servicesData from "../../../content/Services.json";
import { ServicesData } from "../../../types/content_types/Services";
import { ServiceCard } from "./ServiceCard";

import * as css from "./Services.module.css";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
	servicesData as ServicesData;

	return (
		<section id="Services" className={`${css.Services} section`}>
			<span className={`${css.Subtitle}`}>{servicesData.subtitle}</span>
			<h2 className={`title ${css.Title}`}>{servicesData.title}</h2>
			<div className={` ${css.ServicesContainer}`}>
				{servicesData.services.map((service, index) => {
					return (
						<ServiceCard title={service.title} description={service.summary} />
					);
				})}
			</div>
		</section>
	);
};

export { Services };
