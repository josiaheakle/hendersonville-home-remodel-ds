import * as React from "react";

import { Services } from "../components/sections/services/Services";
import { PageTemplate } from "../components/templates/PageTemplate";

import siteData from "../content/SiteData.json";
import { SiteData } from "../types/content_types/SiteData";

import servicesData from "../content/Services.json";
import { ServicesData } from "../types/content_types/Services";

interface servicesProps {}

const services: React.FC<servicesProps> = ({}) => {
	siteData as SiteData;
	servicesData as ServicesData;
	return (
		<PageTemplate siteData={siteData} isHomepage={false}>
			<Services isOwnPage={true} {...servicesData} />
		</PageTemplate>
	);
};

export default services;
