// deps
import * as React from "react";

// comps
import { PageTemplate } from "../components/templates/PageTemplate";
import { Hero } from "../components/sections/hero/Hero";
import { Services } from "../components/sections/services/Services";
import { About } from "../components/sections/about/About";
import { Contact } from "../components/sections/contact/Contact";
import { Location } from "../components/sections/location/Location";
import { CallNowButton } from "../components/ui/buttons/CallNowButton/CallNowButton";

// content
import content from "../content/Content.json";

// css
import "../assets/index.css";
import * as css from "../assets/Page.module.css";
import { ContentData } from "../types/content_types/Content";

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = ({}) => {
	const { hero, about, services, location } = content as unknown as ContentData;

	return (
		<PageTemplate isHomepage={true} activePage="/">
			<main>
				<Hero {...hero} linkTo="#services" />
				<About {...about} />
				<div className={`${css.CallNowBanner}`}>
					<span>
						Looking for a free quote?
						<CallNowButton />
					</span>
				</div>
				<Services {...services} />
				<Location {...location} />
				<Contact />
			</main>
		</PageTemplate>
	);
};

export default IndexPage;
