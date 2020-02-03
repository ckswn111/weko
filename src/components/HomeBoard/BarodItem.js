import React from "react";
import { Link } from "react-router-dom";

function BoardItem({ item, cat, handleActiveNav }) {
	// console.log(item);
	return (
		<li>
			<Link
				to={{
					pathname: "/" + cat + "/view/" + item.number,
					item: { item },
					handleActiveNav: { handleActiveNav }
				}}
			>
				<div className="board_tag">{item.tag ? item.tag : ""}</div>
				<div className="board_item_title">{item.title}</div>
			</Link>
			{/* <Link
				to={{
					pathname: "/news/view/" + item.number,
					item: { item },

					handleActiveNav: { handleActiveNav }
				}}
			>
				<div className="board_tag">{item.tag ? item.tag : ""}</div>
				<div className="board_item_title">{item.title}</div>
			</Link> */}
			<span>{item.date.substring(0, 10)}</span>
		</li>
	);
}

export default BoardItem;
