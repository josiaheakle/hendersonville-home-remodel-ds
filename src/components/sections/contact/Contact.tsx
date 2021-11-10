import * as React from "react";

import * as css from "./Contact.module.css";
import { ContactForm } from "./ContactForm";

interface ContactProps {}

const Contact: React.FC<ContactProps> = ({}) => {
	return (
		<div id="Contact" className={`section`}>
			<ContactForm />
		</div>
	);
};

export { Contact };
