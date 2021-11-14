import * as React from "react";
import { SiteData } from "../../../types/content_types/SiteData";
import { CallNowButton } from "../../ui/buttons/CallNowButton/CallNowButton";

import * as css from "./Footer.module.css";
import { Sitemap } from "./sitemap/Sitemap";

interface FooterProps extends React.HTMLProps<HTMLDivElement> {
	siteData: SiteData;
}

const Footer: React.FC<FooterProps> = ({ className, siteData, ...props }) => {
	return (
		<footer {...props} className={`${className || ""} ${css.Footer}`}>
			<Sitemap className={`${css.Sitemap}`} />
			<CallNowButton className={`${css.CallButton}`} />
			<span id="created-by" className={css.CreatedBy}>
				Website created by{" "}
				<a className="link" href="https://www.josiaheakle.com">
					Josiah Eakle
				</a>
			</span>
			<span id="brand-copyright">© 2021 {siteData.title}.</span>
		</footer>
	);
};

export { Footer };
