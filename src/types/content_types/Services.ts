import { Image } from "./reusable/Image";

interface Service {
	slug: string;
	title: string;
	summary: string;
	additionalText: string;
}

interface ServicesData {
	title: string;
	subtitle: string;
	summary: string;
	services: Array<Service>;
}

export type { Service, ServicesData };
