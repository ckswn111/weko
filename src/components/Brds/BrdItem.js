import React from "react";
import { Link } from "react-router-dom";

function Brd_Item({ item, handleActiveNav, cat }) {
	console.log("brdItem");
	console.log(item);

	return (
		<div className="brd_Item">
			<div className="brd__number">{item.number}</div>
			<div className="brd__title">
				<Link
					to={{
						pathname: "/" + cat + "/view/" + item.number,
						item: { item },
						handleActiveNav: { handleActiveNav }
					}}
				>
					<div className="brd_tag">{item.tag ? item.tag : ""}</div>
					<div className="brd_item_title">{item.title}</div>
				</Link>
			</div>
			<div className="brd__author">{item.author}</div>
			<div className="brd__date">{item.date.substring(2, 10)}</div>
			<div className="brd__reads">{item.view}</div>
		</div>
	);
}

export default Brd_Item;
