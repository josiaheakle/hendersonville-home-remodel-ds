// deps
import * as React from "react";

// comps
import { PageTemplate } from "../components/templates/PageTemplate";
import { Hero } from "../components/sections/hero/Hero";
import { Services } from "../components/sections/services/Services";
import { About } from "../components/sections/about/About";
import { Contact } from "../components/sections/contact/Contact";

// types
import { SiteData as SiteDataType } from "../types/content_types/SiteData";
import { HeroData as HeroDataType } from "../types/content_types/Hero";
import { AboutData as AboutDataType } from "../types/content_types/About";
import { ContactData as ContactDataType } from "../types/content_types/Contact";

// content
import heroData from "../content/Hero.json";
import aboutData from "../content/About.json";
import servicesData from "../content/Services.json";
import contactData from "../content/Contact.json";

// css
import "../assets/index.css";
import { ContactForm } from "../components/sections/contact/ContactForm";
import about from "./about";
import { Reviews } from "../components/sections/testimonials/Reviews";

interface IndexPageProps {}

const IndexPage: React.FC<IndexPageProps> = ({}) => {
	heroData as HeroDataType;
	aboutData as AboutDataType;
	// servicesData as ServicesDataType;
	contactData as ContactDataType;
	return (
		<PageTemplate isHomepage={true} activePage="/">
			<Hero {...heroData} linkTo="#services" />
			<About {...aboutData} />
			{/* <Reviews /> */}
			<Services />
			<Contact />
		</PageTemplate>
	);
};

export default IndexPage;
