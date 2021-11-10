// deps
import * as React from "react";
import { graphql, StaticQuery } from "gatsby";

// comps
import { Header } from "../components/sections/header/Header";
import { Hero } from "../components/sections/hero/Hero";
import { Services } from "../components/sections/services/Services";
import { About } from "../components/sections/about/About";
import { Contact } from "../components/sections/contact/Contact";
import { Footer } from "../components/sections/footer/Footer";

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
						}
					}
				}
				about {
					title
					summary
					subtitle
					mainText
				}
			}
		}
		allSanitySiteSettings {
			nodes {
				id
				siteTitle
			}
		}
		allSanityServices {
			nodes {
				title
				services {
					imagePreview {
						asset {
							altText
							assetId
							description
							extension
							id
							label
							url
							uploadId
							title
							size
							sha1hash
							path
							originalFilename
							mimeType
						}
						crop {
							top
							right
							bottom
							left
						}
						hotspot {
							y
							width
							height
							x
						}
					}
					mainText
					subtitle
					summary
					title
				}
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
				const aboutData = data.allSanityHomepage.nodes[0].about;
				console.log({ data });
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
						<Hero
							image={heroData.coverImage}
							title={heroData.title}
							subtitle={heroData.subtitle}
							linkTo="#services"
						/>
						<About
							title={aboutData.title}
							subtitle={aboutData.subtitle}
							mainText={aboutData.mainText}
						/>
						<Services />
						<Contact />
						<Footer />
					</div>
				);
			}}
		/>
	);
};

export default IndexPage;
