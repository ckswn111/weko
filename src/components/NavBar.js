import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";

function Navbar() {
	return (
		<div className="navBar">
			<header>
				<div className="logo">
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
					<Link to="/" className="title">
						WEKO
					</Link>
				</div>
				<ul className="menu">
					<li>
						<Link to="/news">캐나다소식</Link>
					</li>
					<li>
						<Link to="/free">자유게시판</Link>
					</li>
					<li>
						<Link to="/buysell">온라인장터</Link>
					</li>
					<li>
						<Link to="/info">정보/팁</Link>
					</li>
				</ul>
			</header>
		</div>
	);
}

export default Navbar;
