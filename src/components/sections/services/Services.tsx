import * as React from "react";

import servicesData from "../../../content/Services.json";
import { ServicesData } from "../../../types/content_types/Services";

import * as css from "./Services.module.css";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
	servicesData as ServicesData;

	return (
		<section id="Services" className={`${css.Services} section`}>
			<h3 className={`${css.Subtitle}`}>{servicesData.subtitle}</h3>
			<h2 className={`${css.Title}`}>{servicesData.title}</h2>
			<div className={` ${css.ServicesContainer}`}>
				{servicesData.services.map((service, index) => {
					if (index > 2) return null;
					return (
						<div className={`${css.Service}`}>
							<h3>{service.title}</h3>
							<p>{service.summary}</p>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export { Services };
