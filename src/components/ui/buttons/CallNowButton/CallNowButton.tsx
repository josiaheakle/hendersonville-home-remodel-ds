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
			href="//leads.leadbuyerclub.com/?api_key=52809ea5a1b5b0f05d35ae4db05ea8dae30408d7&affiliate_source=josiaheakle1&category=0&funnel=3&buttons=btn-success&step=1"
		>
			<Button className={css.Button}>Get your Free Estimate</Button>
		</a>
	);
};

export { CallNowButton };
