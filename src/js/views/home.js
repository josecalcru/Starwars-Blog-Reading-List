import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Jumbotron, Button } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
	}, []);

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className="row">
				<Jumbotron>
					<h1>Listado personajes</h1>
					<span>{JSON.stringify(store.favorites)}</span>
					{/* <span>{JSON.stringify(store.peopleList)}</span> */}
					<ul>
						{store.peopleList.map((item, index) => {
							return (
								// Aqui se puede retornar una CARD PARA EL PROYECTO!!!!
								<li key={index}>
									<span>{item.name} </span>{" "}
									<Button onClick={() => actions.setFavorites(item.name)} variant="outline-primary">
										{store.favorites.includes(item.name) ? "ELIMINAR" : "AGREGAR"}
									</Button>{" "}
								</li>
							);
						})}
					</ul>
				</Jumbotron>
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
};
