import React, { useContext, useEffect, Component } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron, Button, Carousel, Card } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
		actions.fetchPlanets();
		actions.fetchStarships();
	}, []);

	let ind;

	return (
		<div className="text-center justify-content-center">
			<img className="titulos" src="https://fontmeme.com/permalink/210404/4f9a8d2a56104d9a70a065d31b072c05.png" />
			<div className="d-flex justify-content-center">
				<span>{JSON.stringify(store.favorites)}</span>
				{/* <span>{JSON.stringify(store.peopleList)}</span> */}

				<Carousel indicators={false} className="carousel">
					{store.planetsList.map((item, index) => {
						return (
							<Carousel.Item key={index}>
								<Card style={{ width: "18rem" }}>
									<Card.Img
										variant="top"
										src={
											"https://starwars-visualguide.com/assets/img/characters/" +
											(index + 1) +
											".jpg"
										}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the cardcontent.
										</Card.Text>
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
								</Card>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>

			<img src="https://fontmeme.com/permalink/210404/d8166600164a07ecc1f624c7efa7207b.png" />
			<div className="d-flex justify-content-center">
				<span>{JSON.stringify(store.favorites)}</span>
				{/* <span>{JSON.stringify(store.peopleList)}</span> */}

				<Carousel indicators={false} className="carousel">
					{store.planetsList.map((item, index) => {
						return (
							<Carousel.Item key={index}>
								<Card style={{ width: "18rem" }}>
									<Card.Img
										variant="top"
										src={
											"https://starwars-visualguide.com/assets/img/characters/" +
											(index + 1) +
											".jpg"
										}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the cardcontent.
										</Card.Text>
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
								</Card>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
			<img src=" https://fontmeme.com/permalink/210404/d8166600164a07ecc1f624c7efa7207b.png" />

			<div className="d-flex justify-content-center">
				<span>{JSON.stringify(store.favorites)}</span>
				{/* <span>{JSON.stringify(store.peopleList)}</span> */}

				<Carousel indicators={false} className="carousel">
					{store.planetsList.map((item, index) => {
						return (
							<Carousel.Item key={index}>
								<Card style={{ width: "18rem" }}>
									<Card.Img
										variant="top"
										src={
											"https://starwars-visualguide.com/assets/img/characters/" +
											(index + 1) +
											".jpg"
										}
									/>
									<Card.Body>
										<Card.Title>Card Title</Card.Title>
										<Card.Text>
											Some quick example text to build on the card title and make up the bulk of
											the cardcontent.
										</Card.Text>
										<Button variant="primary">Go somewhere</Button>
									</Card.Body>
								</Card>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</div>
		</div>
	);
};
