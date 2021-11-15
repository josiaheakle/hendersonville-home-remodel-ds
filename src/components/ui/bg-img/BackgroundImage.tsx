import { StaticImage } from "gatsby-plugin-image";
import { GatsbyImage } from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";
import * as React from "react";
import { Image } from "../../../types/content_types/reusable/Image";

import * as css from "./BackgroundImage.module.css";

interface BackgroundImageProps {
	image: Image;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ image }) => {
	return (
		<div className={`${css.BgImage}`}>
			st
			{/* <GatsbyImage
				className={`${css.HeroImage}`}
				// image={image}
			/> */}
		</div>
	);
};

export { BackgroundImage };
