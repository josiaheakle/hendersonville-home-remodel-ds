import * as React from "react";
import { Button } from "../../ui/buttons/Button";
import { TextAreaInput } from "../../ui/input/TextAreaInput";
import { TextInput } from "../../ui/input/TextInput";

import * as css from "./Contact.module.css";

interface ContactFormProps extends React.HTMLProps<HTMLFormElement> {}

const ContactForm: React.FC<ContactFormProps> = ({ className, ...props }) => {
	const [fullName, setFullName] = React.useState<string>();
	const [email, setEmail] = React.useState<string>();
	const [phoneNumber, setPhoneNumber] = React.useState<string>();
	const [message, setMessage] = React.useState<string>();

	return (
		<form {...props} className={`${className ?? ""} ${css.Form}`}>
			<span className={`${css.FormHeader}`}>Send us a message!</span>
			<TextInput label="Full Name" />
			<TextInput label="Phone Number" />
			<TextInput label="Email" />
			<TextAreaInput type="textarea" label="Message" />
			<Button className={`${css.FormSubmit}`}>Send</Button>
		</form>
	);
};

export { ContactForm };
