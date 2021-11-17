import * as React from "react";

import { About } from "../components/sections/about/About";
import { PageTemplate } from "../components/templates/PageTemplate";

import aboutData from "../content/About.json";

import { TextSection } from "../types/content_types/TextSection";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
	aboutData as TextSection;
	return (
		<PageTemplate isHomepage={false} activePage="/about">
			<About isOwnPage={true} {...aboutData} />
		</PageTemplate>
	);
};

export default about;
