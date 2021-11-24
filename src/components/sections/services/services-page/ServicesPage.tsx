import * as React from "react";

import { Button } from "../../../ui/buttons/Button";
import { ServiceCard } from "./ServiceCard";

import Content from "../../../../content/Content.json";

import { ServicesData } from "../../../../types/content_types/Content";

import * as css from "./ServicesPage.module.css";
import * as gridCss from "../Services.module.css";

interface ServicesPageProps extends ServicesData {}

const ServicesPage: React.FC<ServicesPageProps> = ({
	title,
	subtitle,
	services,
}) => {
	const businessTitle = Content.title;
	return (
		<main id="ServicesPage" className={`${css.ServicesPage}`}>
			<span className={`${css.Subtitle}`}>{subtitle}</span>
			<h1 className={`${css.Title}`}>{title}</h1>
			<div className={` ${gridCss.ServicesGrid}`}>
				{services.map((service, index) => {
					if (index > 4) return null;
					return (
						<div className={`${gridCss.GridItem} ${css.GridItem}`}>
							<h3>{service.title}</h3>
							<p>{service.summary[0]}</p>
							<a
								className={`${gridCss.GridLink}`}
								href={`/services/${service.slugs[0]}`}
								title={`${service.title} | ${businessTitle}`}
							>
								Read More
							</a>
						</div>
					);
				})}
			</div>
		</main>
	);
};

export { ServicesPage };
