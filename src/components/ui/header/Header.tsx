// deps
import * as React from "react";

// types
import HeaderLinkType from "../../../types/prop_types/HeaderLinkType";

// css
import * as css from "./Header.module.css";

// props
interface HeaderProps extends React.HTMLProps<HTMLElement> {
	headerTitle: string;
	headerSubtitle: string;
	headerLogo: string;
	headerLogoAlt: string;
	headerLinks: Array<HeaderLinkType>;
}

const Header: React.FC<HeaderProps> = ({
	headerTitle,
	headerSubtitle,
	headerLinks,
	headerLogo,
	headerLogoAlt,
	className,
	...props
}) => {
	return (
		<header className={`${css.Header} ${className}`} {...props}>
			<div className={`${css.TitleContainer}`}>
				<img src={headerLogo} alt={headerLogoAlt}></img>
				<span>
					<h3 className={`${css.Title}`}>{headerTitle}</h3>
					<h5 className={`${css.Subtitle}`}>{headerSubtitle}</h5>
				</span>
			</div>
			<nav className={`${css.Nav}`}>
				<ul className={`${css.NavList}`}>
					{headerLinks.map((link, i) => (
						<li className={`${css.NavListElem}`} key={i}>
							<a className={`${css.NavLink}`} href={`#${link.linkElemId}`}>
								{link.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

export { Header };
