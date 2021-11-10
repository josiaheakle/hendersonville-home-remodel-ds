import * as React from "react";

import * as css from "./Footer.module.css";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
	return <div className={`${css.Footer}`}></div>;
};

export { Footer };
