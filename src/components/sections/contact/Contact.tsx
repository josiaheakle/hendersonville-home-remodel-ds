import * as React from "react";
import { ContactInfo } from "./ContactInfo";
import { CallNowButton } from "../../ui/buttons/CallNowButton/CallNowButton";

import contactData from "../../../content/Contact.json";

import * as css from "./Contact.module.css";
import { ContactForm } from "./ContactForm";
import { ContactData } from "../../../types/content_types/Contact";
import { StaticImage } from "gatsby-plugin-image";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
	contactData as ContactData;
	return (
		<section id="Contact" className={`${css.Contact}`}>
			<StaticImage
				className={`${css.BgImage}`}
				layout="fullWidth"
				src="../../../assets/images/hero.jpg"
				alt=""
			/>
			<div className={`${css.Heading}`}>
				<span className={`subtitle ${css.Subtitle}`}>How Can We Help?</span>
				<h2 className={`${css.Title} title`}>Contact Us</h2>
				<ContactInfo className={css.ContactInfo} />
			</div>
			<div className={`${css.ContactBanner}`}>
				{/*  className={`${css.Contact}`} */}
				<CallNowButton />
				<span className={`${css.Seperator}`}> - or - </span>
				<ContactForm />
			</div>
		</section>
	);
};

export { Contact };
