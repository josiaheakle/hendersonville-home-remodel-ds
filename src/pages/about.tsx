import * as React from "react";

import { About } from "../components/sections/about/About";
import { PageTemplate } from "../components/templates/PageTemplate";

import aboutData from "../content/About.json";

import { AboutData } from "../types/content_types/About";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
	aboutData as AboutData;
	return (
		<PageTemplate isHomepage={false} activePage="/about">
			<About isOwnPage={true} {...aboutData} />
		</PageTemplate>
	);
};

export default about;
