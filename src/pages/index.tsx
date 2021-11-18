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
import heroData from "../content/Hero.json";
import aboutData from "../content/About.json";
import contactData from "../content/Contact.json";
import locationData from "../content/Location.json";

// types
import { HeroData as HeroDataType } from "../types/content_types/Hero";
import { TextSection as AboutDataType } from "../types/content_types/TextSection";
import { ContactData as ContactDataType } from "../types/content_types/Contact";
import { Location as LocationDataType } from "../types/content_types/Location";

// css
import "../assets/index.css";
import * as css from "../assets/Page.module.css";

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = ({}) => {
	heroData as HeroDataType;
	aboutData as AboutDataType;
	contactData as ContactDataType;
	locationData as LocationDataType;
	return (
		<PageTemplate isHomepage={true} activePage="/">
			<Hero {...heroData} linkTo="#services" />
			<About {...aboutData} />
			<div className={`${css.CallNowBanner}`}>
				<span>
					Looking for a free quote?
					<CallNowButton />
				</span>
			</div>
			<Services />
			<Location {...locationData} />
			<Contact />
		</PageTemplate>
	);
};

export default IndexPage;
