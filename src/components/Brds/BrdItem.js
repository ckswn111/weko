import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

function Brd_Item({ item, handleActiveNav, cat, name }) {
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
						name: { name },
						handleActiveNav: { handleActiveNav }
					}}
				>
					<div className="brd_tag">{item.tag ? item.tag : ""}</div>
					<div className="brd_item_title">{item.title}</div>
				</Link>
			</div>
			<div className="brd__author">
				<Icon fitted name="edit outline" color="blue" />
				{item.author}
			</div>
			<div className="brd__date">{item.date.substring(0, 10)}</div>
			<div className="brd__reads">
				<span className="views__mobile">views </span>
				{item.view}
			</div>
		</div>
	);
}

export default Brd_Item;
