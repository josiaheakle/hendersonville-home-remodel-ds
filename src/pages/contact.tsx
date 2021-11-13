import * as React from "react";
import { Contact } from "../components/sections/contact/Contact";

import { PageTemplate } from "../components/templates/PageTemplate";

import siteData from "../content/SiteData.json";
import { SiteData } from "../types/content_types/SiteData";

interface contactProps {}

const contact: React.FC<contactProps> = ({}) => {
	siteData as SiteData;
	return (
		<PageTemplate siteData={siteData} isHomepage={false}>
			<Contact />
		</PageTemplate>
	);
};

export default contact;
