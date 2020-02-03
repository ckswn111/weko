import React from "react";
import Brd from "../components/Brds/Brd";

function InfoTips({ handleActiveNav, data }) {
	React.useEffect(() => handleActiveNav("info"), []);
	return (
		<div>
			<Brd
				data={data}
				name="정보/팁"
				cat="info"
				handleActiveNav={handleActiveNav}
			/>
		</div>
	);
}

export default InfoTips;
