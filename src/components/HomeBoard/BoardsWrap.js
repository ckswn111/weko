import React from "react";
import Board from "./Board";
import "./BoardsWrap.css";

function BoardsWrap({ data, handleActiveNav }) {
	return (
		<div className="boarder_warp">
			<div>
				<Board
					name="캐나다소식"
					data={data.news}
					cat="news"
					handleActiveNav={handleActiveNav}
				/>
				<Board
					name="자유게시판"
					data={data.forum}
					cat="forum"
					handleActiveNav={handleActiveNav}
				/>
				<Board
					name="온라인장터"
					data={data.buysell}
					cat="buysell"
					handleActiveNav={handleActiveNav}
				/>
				<Board
					name="정보/팁"
					data={data.info}
					cat="info"
					handleActiveNav={handleActiveNav}
				/>
			</div>
		</div>
	);
}

export default BoardsWrap;
