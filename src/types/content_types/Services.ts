import { Image } from "./reusable/Image";

interface Service {
	title: string;
	summary: string;
	additionalText: string;
	image: Image;
}

interface ServicesData {
	title: string;
	subtitle: string;
	services: Array<Service>;
}

export type { Service, ServicesData };
