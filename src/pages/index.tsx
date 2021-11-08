// deps
import * as React from "react";
import { graphql, StaticQuery } from "gatsby";

// comps
import { Header } from "../components/ui/header/Header";
import { Hero } from "../components/sections/hero/Hero";

// imgs
import JEIcon from "../assets/images/icon.png";

// css
import "../assets/index.css";

interface IndexPageProps {}

const HomepageQuery = graphql`
	query {
		allSanityHomepage {
			nodes {
				hero {
					title
					subtitle
					coverImage {
						crop {
							top
							right
							left
							bottom
						}
						hotspot {
							height
							width
							x
							y
						}
						asset {
							altText
							assetId
							description
							id
							label
							source {
								id
								url
								name
							}
							title
							uploadId
							url
							_id
						}
					}
				}
				id
				pageTitle
			}
		}
	}
`;

const IndexPage: React.FC<IndexPageProps> = ({}) => {
	return (
		<StaticQuery
			query={HomepageQuery}
			render={(data) => {
				const heroData = data.allSanityHomepage.nodes[0].hero;
				console.log(heroData);

				return (
					<div style={{ width: "100vw" }}>
						<Header
							headerLinks={[
								{ title: "About", linkElemId: "contact" },
								{ title: "Examples", linkElemId: "contact" },
								{ title: "Contact", linkElemId: "contact" },
							]}
							headerTitle="title"
							headerSubtitle="subtitle"
							headerIcon={{
								src: JEIcon,
								alt: "asdf",
							}}
						/>
						{/* <Hero image={heroData.coverImage} /> */}
					</div>
				);
			}}
		/>
	);
};

export default IndexPage;
