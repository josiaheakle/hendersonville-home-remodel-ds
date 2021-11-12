import * as React from "react";

import { SEOTemplate } from "./SEOTemplate";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

import { SiteData } from "../../types/content_types/SiteData";

interface PageTemplateProps extends React.HTMLProps<HTMLDivElement> {
	siteData: SiteData;
	isHomepage: boolean;
}

/**
 * HANDLES SEO, HEADER AND FOOTER
 */

const PageTemplate: React.FC<PageTemplateProps> = ({
	siteData,
	children,
	isHomepage,
	className,
	...props
}) => {
	return (
		<div className={`${className ?? ""} page`} {...props}>
			<SEOTemplate siteData={siteData} />
			<Header
				headerTitle={siteData.title}
				headerSubtitle={siteData.subtitle}
				headerLinks={siteData.pages}
				headerIcon={siteData.icon}
				isHomepage={isHomepage}
			/>
			{children}
			<Footer siteData={siteData} />
		</div>
	);
};

export { PageTemplate };
