import React from "react";
import BrdOpen from "../components/Brds/BrdOpen";

function NewsView({ data, handleActiveNav, active }) {
	React.useEffect(() => handleActiveNav("news"), [active]);
	// const item = location.item;
	console.log("newsview");
	// console.log(window.location.pathname);
	// console.log();
	const num = window.location.pathname.split("/")[3];
	// console.log(props);
	return (
		<div>
			<BrdOpen item={data[num - 1]} />
		</div>
	);
}

export default NewsView;
