import * as React from "react";

import HeaderLinkType from "../../../../types/prop_types/HeaderLinkType";

import * as css from "./Navbar.module.css";

interface NavbarProps {
	isHomepage?: boolean;

	links: Array<HeaderLinkType>;
}

const Navbar: React.FC<NavbarProps> = ({ links, isHomepage }) => {
	const handleLinkClick = (index: number) => {
		document
			.getElementById(links[index].linkElemId || "")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<nav className={css.Nav}>
			<ul className={css.NavList}>
				{links.map((link, index) => (
					<li className={css.NavListItem} key={index}>
						<a
							className={css.NavLink}
							onClick={(e) => {
								if (isHomepage) {
									e.preventDefault();
									handleLinkClick(index);
								}
							}}
							key={index}
							href={isHomepage ? `#${link.linkElemId}` : link.page}
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
