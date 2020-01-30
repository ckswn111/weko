import React from "react";
import { Link } from "react-router-dom";

function Brd_Item(props) {
	return (
		<div className="brd_Item">
			<div className="brd__number">{props.number}</div>
			<div className="brd__title">
				<Link to={"/news/view/" + props.number}>{props.title}</Link>
			</div>
			<div className="brd__author">{props.author}</div>
			<div className="brd__date">{props.date}</div>
			<div className="brd__reads">{props.reads}</div>
		</div>
	);
}

export default Brd_Item;
