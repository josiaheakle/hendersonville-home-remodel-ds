// deps
import * as React from "react";

// hooks
import {
	useIsMobile,
	useScrollYPosition,
	useScrollDirection,
} from "../../../hooks/ReactiveHooks";

// types
import HeaderLinkType from "../../../types/prop_types/HeaderLinkType";

// css
import * as css from "./Header.module.css";
import { MobileNavbar } from "./navbar/MobileNavbar";
import { Navbar } from "./navbar/Navbar";

// props
interface HeaderProps extends React.HTMLProps<HTMLElement> {
	hidden?: boolean;
	headerTitle: string;
	headerSubtitle: string;
	headerIcon: {
		src: string;
		alt: string;
	};
	headerLinks: Array<HeaderLinkType>;
}

const Header: React.FC<HeaderProps> = ({
	headerTitle,
	headerSubtitle,
	headerLinks,
	headerIcon,
	className,
	...props
}) => {
	const [isShrunk, setIsShrunk] = React.useState(false);

	const [isMobileOpen, setIsMobileOpen] = React.useState(false);
	const [isMobileHidden, setIsMobileHidden] = React.useState(true);

	const isMobile = useIsMobile();
	const scrollY = useScrollYPosition();
	const scrollDirection = useScrollDirection();

	const checkScroll = () => {
		if (scrollY > 80) setIsShrunk(true);
		else setIsShrunk(false);
	};

	const checkScrollDirection = () => {
		console.log({ scrollDirection });

		if (scrollDirection === "up") {
			setIsMobileHidden(false);
		} else setIsMobileHidden(true);
	};

	React.useEffect(() => {
		checkScroll();
	}, [scrollY]);
	React.useEffect(() => {
		checkScrollDirection();
	}, [scrollDirection]);

	return (
		<header
			className={`${css.Header} ${className || ""} ${
				!isShrunk && !isMobile ? css.large : css.small
			} ${isMobileHidden ? css.MobileHidden : ""}`}
			{...props}
		>
			<div className={`${css.HeadingContainer}`}>
				<img
					className={`${css.HeadingIcon}`}
					src={headerIcon.src}
					alt={headerIcon.alt}
				></img>
				<span className={`${css.TitleContainer}`}>
					<h3 className={`${css.Title}`}>{headerTitle}</h3>
					<h5 className={`${css.Subtitle}`}>{headerSubtitle}</h5>
				</span>
			</div>
			{isMobile ? (
				<MobileNavbar links={headerLinks} />
			) : (
				<Navbar links={headerLinks} />
			)}
		</header>
	);
};

export { Header };
