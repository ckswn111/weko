import React from "react";
import Brd from "../components/Brds/Brd";

function BuySell({ handleActiveNav, data }) {
	React.useEffect(() => handleActiveNav("buysell"), []);
	return (
		<div>
			<Brd
				data={data}
				name="온라인장터"
				cat="buysell"
				handleActiveNav={handleActiveNav}
			/>
		</div>
	);
}

export default BuySell;
