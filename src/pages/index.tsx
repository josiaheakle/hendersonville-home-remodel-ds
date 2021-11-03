// deps
import * as React from "react";

// comps
import { Header } from "../components/ui/header/Header";

// assets
import "../assets/index.css";
import { graphql, StaticQuery } from "gatsby";

interface IndexPageProps {}

const homepageQuery = graphql`
	query MyQuery {
		allSanityHomepage {
			nodes {
				hero {
					title
					subtitle
					coverImage {
						asset {
							url
							altText
						}
					}
				}
				about {
					description
					title
				}
			}
		}
	}
`;

const IndexPage: React.FC<IndexPageProps> = ({}) => {
	return (
		<StaticQuery
			query={homepageQuery}
			render={(data) => {
				const logo = data.allSanityHomepage.nodes;

				return (
					<Header
						headerLinks={[
							{ title: "About", linkElemId: "contact" },
							{ title: "Examples", linkElemId: "contact" },
							{ title: "Contact", linkElemId: "contact" },
						]}
						headerTitle="title"
						headerSubtitle="subtitle"
						headerLogo=""
						headerLogoAlt=""
					/>
				);
			}}
		/>
	);
};

export default IndexPage;
