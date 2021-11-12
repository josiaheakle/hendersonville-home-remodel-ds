import * as React from "react";

import { About } from "../components/sections/about/About";
import { PageTemplate } from "../components/templates/PageTemplate";

import siteData from "../content/SiteData.json";
import aboutData from "../content/About.json";

import { SiteData } from "../types/content_types/SiteData";
import { AboutData } from "../types/content_types/About";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
	siteData as SiteData;
	aboutData as AboutData;
	return (
		<PageTemplate siteData={siteData} isHomepage={false}>
			<About isOwnPage={true} {...aboutData} />
		</PageTemplate>
	);
};

export default about;
