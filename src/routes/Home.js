import React from "react";

import BoardsWrap from "../components/HomeBoard/BoardsWrap";

function Home({ handleActiveNav, data }) {
	React.useEffect(() => handleActiveNav("home"), []);
	return (
		<div>{<BoardsWrap data={data} handleActiveNav={handleActiveNav} />}</div>
	);
}

export default Home;
