import * as React from "react";

import { Services } from "../components/sections/services/Services";
import { PageTemplate } from "../components/templates/PageTemplate";

import servicesData from "../content/Services.json";
import { ServicesData } from "../types/content_types/Services";

interface servicesProps {}

const services: React.FC<servicesProps> = ({}) => {
	servicesData as ServicesData;
	return (
		<PageTemplate isHomepage={false} activePage="/services">
			<Services isOwnPage={true} {...servicesData} />
		</PageTemplate>
	);
};

export default services;
