import * as React from "react";
import { ContactInfo } from "./ContactInfo";
import { CallNowButton } from "../../ui/buttons/CallNowButton/CallNowButton";

import contactData from "../../../content/Contact.json";

import * as css from "./Contact.module.css";

import { ContactForm } from "./ContactForm";
import { ContactData } from "../../../types/content_types/Contact";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";

interface ContactProps {
	isOwnPage?: boolean;
}

const Contact: React.FC<ContactProps> = ({ isOwnPage }) => {
	contactData as ContactData;

	const { ref, inView, entry } = useInView({
		threshold: 0,
	});

	const content = (
		<>
			<div className={css.BgImageContainer}>
				{inView ? (
					<StaticImage
						className={`${css.BgImage}`}
						layout="fullWidth"
						src="../../../assets/images/contact.jpg"
						alt=""
					/>
				) : null}
			</div>
			<div className={`${css.Heading}`}>
				<span className={`subtitle ${css.Subtitle}`}>How Can We Help?</span>
				<h2 className={`${css.Title} title`}>Contact Us</h2>
				<ContactInfo className={css.ContactInfo} />
			</div>
			<div className={`${css.ContactBanner}`}>
				<CallNowButton />
				<span className={`${css.Seperator}`}> - or - </span>
				<ContactForm />
			</div>
		</>
	);

	return isOwnPage ? (
		<main ref={ref} id="Contact" className={`${css.Contact}`}>
			{content}
		</main>
	) : (
		<section ref={ref} id="Contact" className={`${css.Contact}`}>
			{content}
		</section>
	);
};

export { Contact };
