import * as React from "react";

import * as css from "./Services.module.css";

// types
import { Image } from "../../../types/content_types/reusable/Image";
import { splitAtSpace } from "../../../utlis/string-utils";

interface ServiceCardProps {
	title: string;
	description: string;
	image?: Image;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	description,
	image,
}) => {
	const getSummary = (): string => {
		return `${splitAtSpace(description, 100)}...`;
	};

	return (
		<div className={css.Service}>
			<h3 className={css.ServiceTitle}>{title}</h3>
			<p className={css.ServiceDescription}>{getSummary()}</p>
			<a href="" className="link">
				Read More
			</a>
		</div>
	);
};

export { ServiceCard };
