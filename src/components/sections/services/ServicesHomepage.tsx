import * as React from "react";

import { Button } from "../../ui/buttons/Button";

import Content from "../../../content/Content.json";

import { ServicesData } from "../../../types/content_types/Content";

import * as css from "./Services.module.css";

interface ServicesProps extends ServicesData {}

const Services: React.FC<ServicesProps> = ({ title, subtitle, services }) => {
	const businessTitle = Content.title;
	return (
		<section id="Services" className={`section ${css.Services}`}>
			<span className={`${css.Subtitle}`}>{subtitle}</span>
			<h2 className={`${css.Title}`}>{title}</h2>
			<div className={` ${css.ServicesGrid}`}>
				{services.map((service, index) => {
					if (index > 4) return null;
					return (
						<div className={`${css.GridItem}`}>
							<h3>{service.title}</h3>
							<p>{service.summary[0]}</p>
							<a
								className={`${css.GridLink}`}
								href={`/services/${service.slugs[0]}`}
								title={`${service.title} | ${businessTitle}`}
							>
								Read More
							</a>
						</div>
					);
				})}
			</div>
			{services.length > 5 ? (
				<a href="/services">
					<Button className={css.ReadMore}>See All</Button>
				</a>
			) : null}
		</section>
	);
};

export { Services };
