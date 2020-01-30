import React from "react";
import Bulletine from "./BarodItem";
import "./Board.css";
import more from "../images/more.png";

function Board() {
	return (
		<div className="board">
			<div className="board_header">
				<a href="/" className="board__title">
					캐나다뉴스
				</a>
				<a href="/" className="board__more">
					<img src={more} alt="more" />
				</a>
			</div>
			<div className="board_list">
				<ul>
					<Bulletine />
					<Bulletine />
					<Bulletine />
					<Bulletine />
					<Bulletine />
					<Bulletine />
					<Bulletine />
				</ul>
			</div>
		</div>
	);
}

export default Board;
