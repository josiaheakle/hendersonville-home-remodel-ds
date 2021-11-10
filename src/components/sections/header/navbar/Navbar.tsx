import * as React from "react";

import HeaderLinkType from "../../../../types/prop_types/HeaderLinkType";

import * as css from "./Navbar.module.css";

interface NavbarProps {
	links: Array<HeaderLinkType>;
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
	const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();

		const target = e.target as HTMLAnchorElement;
		const href = target.href;

		document.getElementById(href)?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className={css.Nav}>
			<ul className={css.NavList}>
				{links.map((link, index) => (
					<li className={css.NavListItem} key={index}>
						<a
							className={css.NavLink}
							onClick={handleLinkClick}
							key={index}
							href={link.linkElemId}
						>
							{link.title}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export { Navbar };
