import * as React from "react";
import { ServiceData } from "../../types/content_types/Content";
import { Service } from "../sections/services/service-page/Service";
import { PageTemplate } from "./PageTemplate";

interface ServicePageTemplateProps {
	pageContext: {
		service: ServiceData;
	};
}

const ServicePageTemplate: React.FC<ServicePageTemplateProps> = ({
	pageContext,
}) => {
	return (
		<PageTemplate isHomepage={false} activePage={"/services"}>
			<Service
				title={pageContext.service.title}
				summary={pageContext.service.summary}
				additionalText={pageContext.service.additionalText}
			/>
		</PageTemplate>
	);
};

export default ServicePageTemplate;
