import React from "react";
import BoardItem from "./BarodItem";
import "./Board.css";
import more from "../images/more.png";
import { Link } from "react-router-dom";

function Board({ name, data, cat, handleActiveNav }) {
	return (
		<div className="board">
			<div className="board_header">
				<Link to={"/" + cat} className="board__title">
					{name}
				</Link>
				<Link to={"/" + cat} className="board__more">
					<img src={more} alt="more" />
				</Link>
			</div>
			<div className="board_list">
				<ul>
					{data
						.slice(0)
						.reverse()
						.map(item => {
							return (
								<BoardItem
									key={item.number}
									item={item}
									handleActiveNav={handleActiveNav}
									cat={cat}
								/>
							);
						})}
				</ul>
			</div>
		</div>
	);
}

export default Board;
