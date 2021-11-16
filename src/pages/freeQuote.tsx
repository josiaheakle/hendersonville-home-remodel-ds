import * as React from "react";
import { PageTemplate } from "../components/templates/PageTemplate";

interface freeQuoteProps {}

const freeQuote: React.FC<freeQuoteProps> = ({}) => {
	return (
		<PageTemplate isHomepage={false} activePage="/freeQuote"></PageTemplate>
	);
};

export default freeQuote;
