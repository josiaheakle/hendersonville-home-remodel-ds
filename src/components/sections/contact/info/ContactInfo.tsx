import * as React from "react";

import contactData from "../../../../content/Contact.json";
import { ContactData } from "../../../../types/content_types/Contact";

import PhoneIcon from "../../../../assets/images/icons/phone-call.svg";
import HomeIcon from "../../../../assets/images/icons/homepage.svg";

import * as css from "./ContactInfo.module.css";

interface ContactInfoProps {
	phoneNumber?: string;
	addressLn1?: string;
	addressLn2?: string;
	hidden?: boolean;
	className?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
	phoneNumber,
	addressLn1,
	addressLn2,
	hidden,
	className,
}) => {
	contactData as ContactData;
	return (
		<address
			className={`${css.ContactInfo} ${hidden ? css.hidden : ""} ${className} `}
		>
			<a
				className={`${css.Phone} link`}
				href={`tel:${contactData.phoneNumber}`}
			>
				<img
					className={`${css.ContactIcon}`}
					src={PhoneIcon}
					alt="Phone Icon"
				/>
				{contactData.phoneNumber}
			</a>
			<span className={`${css.AddressContainer}`}>
				<img className={`${css.ContactIcon}`} src={HomeIcon} alt="House Icon" />
				<span>
					<span>{contactData.address.street}</span> <br />
					<span>
						{contactData.address.city}, {contactData.address.state}{" "}
						{contactData.address.zip}{" "}
					</span>
				</span>
			</span>
		</address>
	);
};

export { ContactInfo };
