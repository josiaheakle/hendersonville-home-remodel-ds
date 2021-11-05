// deps
import * as React from "react";

// comps
import { Header } from "../components/ui/header/Header";

// assets
import "../assets/index.css";
import { graphql, StaticQuery } from "gatsby";
import { Hero } from "../components/sections/hero/Hero";

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
					<div>
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
						<Hero image={heroData.coverImage} />
						<div style={{ backgroundColor: "var(--contrast-color)" }}>
							<h2
								style={{
									width: "var(--max-content-width)",
									margin: "auto",
								}}
							>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
								corrupti deserunt soluta qui eum, necessitatibus eius quod
								dolor, rem quas enim id! Vero tempore ipsam vel tenetur maxime,
								nam esse?
							</h2>
						</div>
					</div>
				);
			}}
		/>
	);
};

export default IndexPage;
