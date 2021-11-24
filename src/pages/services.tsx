import * as React from "react";

import { ServicesPage } from "../components/sections/services/services-page/ServicesPage";
import { PageTemplate } from "../components/templates/PageTemplate";

import content from "../content/Content.json";
import { ContentData } from "../types/content_types/Content";

interface servicesProps {}

const services: React.FC<servicesProps> = ({}) => {
	const { services } = content as unknown as ContentData;
	return (
		<PageTemplate isHomepage={false} activePage="/services">
			<ServicesPage {...services} />
		</PageTemplate>
	);
};

export default services;
