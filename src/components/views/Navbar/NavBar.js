import React from "react";

import "./NavBar.css";

import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { Dropdown } from "semantic-ui-react";
import { useGlobalState } from "../../../state.js";

function NavBar() {
	const [currentNav] = useGlobalState("currentNav");
	return (
		<nav className="navBar">
			<header>
				<div className="logo_nav">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</div>
				<div className="mobile_dropdown">
					<Dropdown
						// text="Menu"
						icon="list ul"
						floating
						labeled
						className="icon"
					>
						<Dropdown.Menu>
							<Dropdown.Item>
								<Link to="/news">캐나다소식</Link>
							</Dropdown.Item>
							<Dropdown.Item>
								<Link to="/forum">자유게시판</Link>
							</Dropdown.Item>
							<Dropdown.Item>
								<Link to="/buysell">온라인장터</Link>
							</Dropdown.Item>
							<Dropdown.Item>
								<Link to="/info">정보/팁</Link>
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</div>

				<ul className="menu">
					<li className={currentNav === "news" ? "active" : ""}>
						<Link to="/news">
							<span>캐나다소식</span>
						</Link>
					</li>
					<li className={currentNav === "forum" ? "active" : ""}>
						<Link to="/forum">
							<span>자유게시판</span>
						</Link>
					</li>
					<li className={currentNav === "buysell" ? "active" : ""}>
						<Link to="/buysell">
							<span>온라인장터</span>
						</Link>
					</li>
					<li className={currentNav === "info" ? "active" : ""}>
						<Link to="/info">
							<span>정보/팁</span>
						</Link>
					</li>
				</ul>
			</header>
		</nav>
	);
}

export default NavBar;
