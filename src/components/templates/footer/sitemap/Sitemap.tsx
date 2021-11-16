import * as React from "react";

import siteData from "../../../../content/SiteData.json";
import { SiteData } from "../../../../types/content_types/SiteData";

import * as css from "./Sitemap.module.css";
import { SitemapLink } from "./SitemapLink";

interface SitemapProps extends React.HTMLProps<HTMLDivElement> {}

const Sitemap: React.FC<SitemapProps> = ({ className, ...props }) => {
	siteData as SiteData;
	return (
		<nav {...props} className={`${className || ""} ${css.Sitemap}`}>
			<span className={`${css.Heading}`}>Page Links</span>
			<ul className={`${css.List}`}>
				{siteData.pages.map((page, i) => (
					<SitemapLink
						key={i}
						className={css.Link}
						title={page.title}
						href={page.page}
					/>
				))}
			</ul>
		</nav>
	);
};

export { Sitemap };
