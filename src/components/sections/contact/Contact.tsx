import * as React from "react";
import { CallNowButton } from "../../ui/buttons/CallNowButton/CallNowButton";

import * as css from "./Contact.module.css";
import { ContactForm } from "./ContactForm";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
	return (
		<section id="Contact" className={`${css.Contact}`}>
			<span className={`subtitle ${css.Subtitle}`}>How Can We Help?</span>
			<h2 className={`${css.Title} title`}>Contact Us</h2>
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
