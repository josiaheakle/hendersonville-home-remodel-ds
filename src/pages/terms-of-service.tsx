import * as React from "react";

import { PageTemplate } from "../components/templates/PageTemplate";

import content from "../content/Content.json";
import { ContentData } from "../types/content_types/Content";

interface PrivatePolicyPageProps {}

const PrivatePolicyPage: React.FC<PrivatePolicyPageProps> = ({}) => {
	const { siteData, attributions } = content as unknown as ContentData;
	const buisnessTitle = siteData.title;
	return (
		<PageTemplate activePage="/private-policy" isHomepage={false}>
			<div className={`section container`}>
				<p>
					<b>DISCLAIMER: </b>This site is a lead generation service to assist
					homeowners and businesses in connecting with local service
					contractors. All contractors are independent and this site does not
					warrant or guarantee any work performed. It is the responsibility of
					the homeowner or business owner using the services to verify that the
					hired contractor furnishes the necessary license and insurance
					required for the work being performed. All persons depicted in a photo
					or video are actors or models and not contractors listed on this site.
				</p>
				<br />
				<p>
					<b>TERMS AND CONDITIONS:</b>
				</p>
				<br />
				<p>
					At <b>{buisnessTitle}</b> we are strictly a lead generation company
					that works with local service providers and helps homeowners and
					businesses in local areas find and connect with these local service
					providers.
				</p>
				<br />
				<p>
					We do not make any Guarantees. It is entirely up to you to validate
					any of the service providers full credentials and certifications. You
					will also enter into a direct contract between you and the service
					provider you were connected with through one of our lead generation
					platforms. We do not guarantee or warrant any of the work or the
					performance on the job or the outcome that the service provider
					completes on your home, building or business. The Service
					Professionals are not employees or agents of <b>{buisnessTitle}</b>.{" "}
					<b>{buisnessTitle}</b> is not by any means an agent or employee of the
					Service Provider you may work with.
				</p>
				<br />
				<p>
					Release from Damages or Claims. Should you have a dispute or unhappy
					with any work that is performed by any services provided by a Service
					Professional from one of our lead generation websites, you must
					address such dispute with the Service Professional directly.
				</p>
				<p>
					Photos provided by{" "}
					{attributions.authors.map(
						(a, i) =>
							`${a}${i === attributions.authors.length - 2 ? " and " : ""}${
								i >= attributions.authors.length - 2 ? "" : ", "
							}`
					)}{" "}
					at <a href={attributions.link}>{attributions.title}</a>
				</p>
			</div>
		</PageTemplate>
	);
};

export default PrivatePolicyPage;
