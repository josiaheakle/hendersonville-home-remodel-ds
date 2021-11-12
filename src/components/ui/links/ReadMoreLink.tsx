import * as React from "react";

import * as css from "./ReadMoreLink.module.css";

interface ReadMoreLinkProps extends React.HTMLProps<HTMLAnchorElement> {}

const ReadMoreLink: React.FC<ReadMoreLinkProps> = ({ className, ...props }) => {
	return <a className={`${className ?? ""} ${css.ReadMore}`} {...props}></a>;
};

export { ReadMoreLink };
