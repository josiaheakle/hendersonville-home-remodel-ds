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

// css
import "../assets/index.css";
import * as css from "../assets/Page.module.css";
import { ContentData } from "../types/content_types/Content";
import { CallNowBanner } from "../components/ui/buttons/CallNowButton/CallNowBanner";
import { graphql } from "gatsby";

interface IndexPageProps {
	data: unknown;
}

const IndexPage: React.FC<IndexPageProps> = ({ data }) => {
	const { hero, about, services, location } = data as ContentData;

	return (
		<PageTemplate isHomepage={true} activePage="/">
			<main>
				<Hero {...hero} linkTo="#services" />
				<About {...about} />
				<CallNowBanner />
				<Services {...services} />
				<Location {...location} />
				<Contact />
			</main>
		</PageTemplate>
	);
};

export const query = graphql`
	query {
		contentJson {
			about {
				additionalText
				image {
					src
					alt
				}
				subtitle
				summary
				title
			}
			attributions {
				authors
				link
				title
			}
			contact {
				facebook
				youtube
				address {
					city
					state
					street
					zip
				}
				email
				phoneNumber
			}
			hero {
				subtitle
				title
				image {
					alt
					src
				}
			}
			location {
				additionalText
				city
				state
				subtitle
				summary
				title
			}
			services {
				subtitle
				title
			}
			siteData {
				url
				title
				subtitle
				pages {
					linkElemId
					page
					title
				}
				image {
					alt
					src
				}
				icon {
					alt
					src
				}
				description
			}
			title
		}
	}
`;

export default IndexPage;
