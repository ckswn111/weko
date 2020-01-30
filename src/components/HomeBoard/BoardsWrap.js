import React from "react";
import Board from "./Board";
import "./BoardsWrap.css";

function BoardsWrap() {
	return (
		<div className="boarder_warp">
			<div>
				<Board />
				<Board />
				<Board />
				<Board />
			</div>
		</div>
	);
}

export default BoardsWrap;
