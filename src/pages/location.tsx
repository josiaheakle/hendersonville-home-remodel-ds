import * as React from "react";

// comps
import { Location } from "../components/sections/location/Location";
import { PageTemplate } from "../components/templates/PageTemplate";

// data
import locationData from "../content/Location.json";

// types
import { Location as LocationDataType } from "../types/content_types/Location";

interface aboutProps {}

const about: React.FC<aboutProps> = ({}) => {
	locationData as LocationDataType;
	return (
		<PageTemplate isHomepage={false} activePage="/location">
			<Location isOwnPage={true} {...locationData} />
		</PageTemplate>
	);
};

export default about;
