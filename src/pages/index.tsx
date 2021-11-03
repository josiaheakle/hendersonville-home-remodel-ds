// deps
import * as React from "react";

// comps
import { Header } from "../components/ui/header/Header";

// assets
import "../assets/index.css";
import { graphql, StaticQuery } from "gatsby";
import { Hero } from "../components/sections/hero/Hero";

interface IndexPageProps {}

const homepageQuery = graphql`
	query {
		allSanityHomepage {
			nodes {
				hero {
					title
					subtitle
					coverImage {
						_key
						_rawHotspot
						_rawCrop
						_rawAsset
						_type
						asset {
							_id
							_key
							_rawMetadata
							_rawSource
							_rev
							_type
							altText
							assetId
							description
							extension
							id
							label
							size
							title
							uploadId
							url
							source {
								_key
								_type
								id
								name
								url
							}
							path
							sha1hash
							parent
							originalFilename
							mimeType
						}
						crop {
							_key
							_type
							bottom
							left
							right
							top
						}
						hotspot {
							_key
							_type
							height
							width
							x
							y
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
				const heroData = data.allSanityHomepage.nodes[1].hero;
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
						{/* <Hero image={heroData.} /> */}
					</div>
				);
			}}
		/>
	);
};

export default IndexPage;
