import React from "react";
import Board from "./Board";
import "./BoardsWrap.css";

function BoardsWrap({ data }) {
	return (
		<div className="boarder_warp">
			<div>
				<Board name="캐나다소식" data={data.news} cat="news" />
				<Board name="자유게시판" data={data.forum} cat="forum" />
				<Board name="온라인장터" data={data.buysell} cat="buysell" />
				<Board name="정보/팁" data={data.info} cat="info" />
			</div>
		</div>
	);
}

export default BoardsWrap;
