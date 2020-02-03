import React from "react";
import "./Banner1.css";
import "antd/dist/antd.css";
import { Carousel } from "antd";

function Banner1() {
	return (
		<Carousel className="banner" autoplay>
			<div className="car__1"></div>
			<div className="car__2"></div>
			<div className="car__3"></div>
			<div className="car__4"></div>
		</Carousel>
	);
}

export default Banner1;
