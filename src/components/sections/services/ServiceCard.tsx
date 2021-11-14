import * as React from "react";

import * as css from "./Services.module.css";

// types
import { Image } from "../../../types/content_types/reusable/Image";
import { splitAtSpace } from "../../../utlis/string-utils";

interface ServiceCardProps {
	title: string;
	description: string;
	slug: string;
	isOwnPage?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	description,
	slug,
	isOwnPage,
}) => {
	const getSummary = (): string => {
		return `${splitAtSpace(description, 100)}...`;
	};

	return (
		<article className={css.Service}>
			{isOwnPage ? (
				<h2 className={css.ServiceTitle}>{title}</h2>
			) : (
				<h3 className={css.ServiceTitle}>{title}</h3>
			)}
			<p className={css.ServiceDescription}>{getSummary()}</p>
			<a href={`/services/${slug}`} className="link">
				Read More
			</a>
		</article>
	);
};

export { ServiceCard };
