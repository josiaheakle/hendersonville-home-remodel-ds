import * as React from "react";

import * as css from "./Reviews.module.css";

interface ReviewsProps {}

const Reviews: React.FC<ReviewsProps> = ({}) => {
	return <section id="Reviews" className={`${css.Reviews}`}></section>;
};

export { Reviews };
