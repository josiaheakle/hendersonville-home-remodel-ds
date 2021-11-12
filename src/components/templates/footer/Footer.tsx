import * as React from "react";
import { SiteData } from "../../../types/content_types/SiteData";

import * as css from "./Footer.module.css";

interface FooterProps extends React.HTMLProps<HTMLDivElement> {
	siteData: SiteData;
}

const Footer: React.FC<FooterProps> = ({ className, siteData, ...props }) => {
	return (
		<footer {...props} className={`${className} ${css.Footer}`}>
			<span id="brand-copyright">
				© 2021 {siteData.title.toUpperCase()}.
				<br /> ALL RIGHTS RESERVED.
			</span>
			<span id="created-by" className={css.CreatedBy}>
				WEBSITE CREATED BY <br />
				<a className="created-by-link" href="josiaheakle.com">
					JOSIAH EAKLE
				</a>
			</span>
		</footer>
	);
};

export { Footer };
