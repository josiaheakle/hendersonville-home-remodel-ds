import * as React from "react";

import * as css from "./Services.module.css";

// types
import { Image } from "../../../types/content_types/reusable/Image";
import { splitAtSpace } from "../../../utlis/string-utils";
import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import { StaticImage } from "gatsby-plugin-image";
import { GatsbyGraphQLType, graphql } from "gatsby";

interface ServiceCardProps {
	title: string;
	summary: string[];
	slug: string;
	image?: Image;
	isOwnPage?: boolean;
	className?: string;
	src: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
	title,
	summary,
	slug,
	image,
	isOwnPage,
	className,
	...props
}) => {
	console.log({ props });
	return (
		<article className={`${css.Service} ${className}`}>
			{/* {image ? (
				<div className={`${css.ImageContainer}`}>
					<StaticImage
						alt={image.alt}
						title={image.title}
						src={`../../../assets/images/services${image.src}`}
					/>
				</div>
			) : null} */}
			{isOwnPage ? (
				<h2 className={css.ServiceTitle}>{title}</h2>
			) : (
				<h3 className={css.ServiceTitle}>{title}</h3>
			)}
			{summary.map((para, i) => (
				<p key={i} className={css.ServiceDescription}>
					{para}
				</p>
			))}
			<a title={title} href={`/services/${slug}`} className="link">
				Read More
			</a>
		</article>
	);
};

// export const query = graphql`
// 	query ImageQuery($src: String) {
// 		allImageSharp(filter: { original: { src: { in: [$src] } } }) {
// 			edges {
// 				node {
// 					gatsbyImageData
// 				}
// 			}
// 		}
// 	}
// `;

export { ServiceCard };
