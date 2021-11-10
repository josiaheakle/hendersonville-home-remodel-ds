import * as React from "react";

import * as css from "./Footer.module.css";

interface FooterProps extends React.HTMLProps<HTMLDivElement> {}

const Footer: React.FC<FooterProps> = ({ className, ...props }) => {
	return <footer {...props} className={`${className} ${css.Footer}`}></footer>;
};

export { Footer };
