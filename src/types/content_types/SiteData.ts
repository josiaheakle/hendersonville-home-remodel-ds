import { Image } from "./reusable/Image";

export interface SiteData {
	url: string;
	title: string;
	subtitle: string;
	description: string;
	image: Image;
	icon: Image;
	pages: Array<{
		title: string;
		page?: string;
		linkElemId?: string;
	}>;
}
