import { Image } from "./reusable/Image";

interface Service {
	slugs: string[];
	title: string;
	summary: string[];
	additionalText: string[];
	altTitles?: string[];
	image?: Image;
}

interface ServicesData {
	title: string;
	subtitle: string;
	summary: string[];
	services: Service[];
}

export type { Service, ServicesData };
