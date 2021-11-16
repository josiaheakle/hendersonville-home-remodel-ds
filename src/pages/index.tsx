// deps
import * as React from "react";

// comps
import { PageTemplate } from "../components/templates/PageTemplate";
import { Hero } from "../components/sections/hero/Hero";
import { Services } from "../components/sections/services/Services";
import { About } from "../components/sections/about/About";
import { Contact } from "../components/sections/contact/Contact";

// content
import heroData from "../content/Hero.json";
import aboutData from "../content/About.json";
import contactData from "../content/Contact.json";

// types
import { HeroData as HeroDataType } from "../types/content_types/Hero";
import { AboutData as AboutDataType } from "../types/content_types/About";
import { ContactData as ContactDataType } from "../types/content_types/Contact";

// css
import "../assets/index.css";

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = ({}) => {
	heroData as HeroDataType;
	aboutData as AboutDataType;
	contactData as ContactDataType;
	return (
		<PageTemplate isHomepage={true} activePage="/">
			<Hero {...heroData} linkTo="#services" />
			<About {...aboutData} />
			<Services />
			<Contact />
		</PageTemplate>
	);
};

export default IndexPage;
