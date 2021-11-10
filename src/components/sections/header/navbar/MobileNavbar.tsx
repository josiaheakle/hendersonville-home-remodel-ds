// deps
import * as React from "react";

// types
import HeaderLinkType from "../../../../types/prop_types/HeaderLinkType";
import { Button } from "../../../ui/buttons/Button";

// css
import * as css from "./Navbar.module.css";

interface MobileNavbarProps {
	links: Array<HeaderLinkType>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ links }) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		setIsOpen(false);

		const target = e.target as HTMLAnchorElement;
		const href = target.href;

		document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className={css.MobileNav}>
			<ul className={`${css.MobileNavList} ${isOpen ? css.NavOpen : ""}`}>
				{links.map((link, index) => (
					<li className={css.MobileNavListItem} key={index}>
						<a
							className={css.MobileNavLink}
							onClick={handleLinkClick}
							key={index}
							href={`${link.linkElemId}`}
						>
							{link.title}
						</a>
					</li>
				))}
				<Button className={css.CallNowButton}>Call Now</Button>
			</ul>
			<div
				onClick={() => {
					setIsOpen(!isOpen);
				}}
				className={`${css.MobileNavButton} ${isOpen ? css.NavOpen : ""}`}
			>
				<div className={css.MobileNavButtonTop}></div>
				<div className={css.MobileNavButtonMiddle}></div>
				<div className={css.MobileNavButtonBottom}></div>
			</div>
		</nav>
	);
};

export { MobileNavbar };
