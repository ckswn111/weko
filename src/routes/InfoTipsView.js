import React from "react";
import BrdOpen from "../components/Brds/BrdOpen";

function InfoTipsView({ data }) {
	// React.useEffect(() => location.handleActiveNav.handleActiveNav("news"), []);
	// const item = location.item;
	// console.log("newsview");

	const num = window.location.pathname.split("/")[3];
	// console.log(props);
	return (
		<div>
			<BrdOpen item={data[num - 1]} />
		</div>
	);
}

export default InfoTipsView;
