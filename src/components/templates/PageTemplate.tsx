import * as React from "react";

import { SEOTemplate } from "./SEOTemplate";
import { Header } from "./header/Header";
import { Footer } from "./footer/Footer";

import siteData from "../../content/SiteData.json";
import { SiteData } from "../../types/content_types/SiteData";

interface PageTemplateProps extends React.HTMLProps<HTMLDivElement> {
	isHomepage: boolean;
	activePage: string;
}

/**
 * Handles meta data, header and footer
 */

const PageTemplate: React.FC<PageTemplateProps> = ({
	children,
	isHomepage,
	className,
	activePage,
	...props
}) => {
	siteData as SiteData;
	return (
		<div
			className={`${className ?? ""} ${!isHomepage ? "page" : ""}`}
			{...props}
		>
			<SEOTemplate siteData={siteData} />
			<Header
				headerTitle={siteData.title}
				headerSubtitle={siteData.subtitle}
				headerLinks={siteData.pages}
				headerIcon={siteData.icon}
				isHomepage={isHomepage}
				activePage={activePage}
			/>
			{children}
			<Footer siteData={siteData} />
		</div>
	);
};

export { PageTemplate };
