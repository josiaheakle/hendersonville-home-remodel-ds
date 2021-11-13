import * as React from "react";
import { Button } from "../Button";

import * as css from "./CallNowButton.module.css";

import contactData from "../../../../content/Contact.json";
import { ContactData } from "../../../../types/content_types/Contact";

interface CallNowButtonProps extends React.HTMLProps<HTMLAnchorElement> {}

const CallNowButton: React.FC<CallNowButtonProps> = ({
	className,
	...props
}) => {
	contactData as ContactData;
	return (
		<a
			{...props}
			className={`${className || ""}`}
			href={`tel:${contactData.phoneNumber}`}
		>
			<Button className={css.Button}>Call Now</Button>
		</a>
	);
};

export { CallNowButton };
