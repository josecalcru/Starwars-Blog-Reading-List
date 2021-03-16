import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<div className="row">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>

		<h1>Vehicles</h1>
		<div className="row">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<h1>Planets</h1>
		<div className="row">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>
);
