import React from "react";
import Brd from "../components/Brds/Brd";

function Forum({ handleActiveNav, data }) {
	React.useEffect(() => handleActiveNav("forum"), []);
	return (
		<div>
			<Brd
				data={data}
				name="자유게시판"
				cat="forum"
				handleActiveNav={handleActiveNav}
			/>
		</div>
	);
}

export default Forum;
