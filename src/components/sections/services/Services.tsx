import * as React from "react";

import * as css from "./Services.module.css";

interface ServicesProps {}

const Services: React.FC<ServicesProps> = ({}) => {
	return <section className={`${css.Services} section`}></section>;
};

export { Services };
