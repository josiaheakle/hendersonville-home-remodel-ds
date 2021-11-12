import * as React from "react";

import { Helmet } from "react-helmet";

import { SiteData } from "../../types/content_types/SiteData";

interface SEOTemplateProps {
	siteData: SiteData;
}

const SEOTemplate: React.FC<SEOTemplateProps> = ({ siteData }) => {
	return (
		<Helmet title={siteData.title}>
			<meta name="description" content={siteData.description} />
			<meta name="image" content={siteData.image.src} />
			<meta property="og:url" content={siteData.url} />
			<meta property="og:description" content={siteData.description} />
			<meta property="og:image" content={siteData.image.src} />
		</Helmet>
	);
};

export { SEOTemplate };