import * as React from "react";
import { Button } from "../Button";

import * as css from "./CallNowButton.module.css";

interface CallNowButtonProps {}

const CallNowButton: React.FC<CallNowButtonProps> = ({}) => {
	return <Button className={css.Button}>Call Now</Button>;
};

export { CallNowButton };
