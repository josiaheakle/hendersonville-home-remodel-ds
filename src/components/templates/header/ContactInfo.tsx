import * as React from "react";

import contactData from "../../../content/Contact.json";
import { ContactData } from "../../../types/content_types/Contact";

import * as css from "./Header.module.css";

interface ContactInfoProps {
	phoneNumber?: string;
	addressLn1?: string;
	addressLn2?: string;
	hidden?: boolean;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
	phoneNumber,
	addressLn1,
	addressLn2,
	hidden,
}) => {
	contactData as ContactData;
	return (
		<div
			className={`${css.ContactInfo} ${hidden ? css.hidden : ""} small-text`}
		>
			<span>{contactData.phoneNumber}</span>
			<address>
				<span>{contactData.address.street}</span> <br />
				<span>
					{contactData.address.city}, {contactData.address.state}{" "}
					{contactData.address.zip}{" "}
				</span>
			</address>
		</div>
	);
};

export { ContactInfo };
