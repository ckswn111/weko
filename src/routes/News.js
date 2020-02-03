import React from "react";
import Brd from "../components/Brds/Brd";

function News({ handleActiveNav, data }) {
	React.useEffect(() => handleActiveNav("news"), []);

	return (
		<div>
			<Brd
				data={data}
				name="캐나다소식"
				cat="news"
				handleActiveNav={handleActiveNav}
			/>
		</div>
	);
}

export default News;
