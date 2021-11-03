import * as React from "react";
import Image from "gatsby-plugin-sanity-image";

import * as css from "./Hero.module.css";

interface HeroProps {
	image: {
		asset: any;
		hotspot: any;
		crop: any;
		width: any;
		height: any;
		options?: {} | undefined;
		config?: {} | undefined;
		__typename: any;
		_type: any;
		_key: any;
		sources: any;
	};
}

const Hero: React.FC<HeroProps> = ({ image }) => {
	return (
		<div className={`${css.Hero}`}>
			<Image className={`${css.HeroImage}`} {...image} />
			<div className={`${css.ContentContainer}`}></div>
		</div>
	);
};

export { Hero };
