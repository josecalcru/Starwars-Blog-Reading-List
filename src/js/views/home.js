import React, { useContext, useEffect, Component } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron, Button, Carousel, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();

		actions.fetchVehicles();
		actions.fetchPlanets();
	}, []);

	return (
		<div className="row justify-content-center">
			<div className="text-center justify-content-center mt-10 row">
				<div className="col-4">
					<img
						className="titulos mt-10"
						src="https://fontmeme.com/permalink/210404/4f9a8d2a56104d9a70a065d31b072c05.png"
					/>
					<div className="d-flex justify-content-center">
						{/* <span>{JSON.stringify(store.peopleList)}</span> */}

						<Carousel fade indicators={false} className="carousel" style={{ width: "22rem" }}>
							{store.peopleList.map((item, index) => {
								return (
									<Carousel.Item key={index} className="d-flex justify-content-center">
										<Card style={{ width: "18rem" }}>
											<Card.Img
												variant="top"
												src={
													"https://starwars-visualguide.com/assets/img/characters/" +
													item.url.match(/\d/g).join("") +
													".jpg"
												}
												width="100%"
											/>
											<Card.Body>
												<Card.Title>{item.name}</Card.Title>
												<Card.Text>
													<ListGroup className="list-group-flush d-flex pr-auto">
														<ListGroupItem className="pr-aut0">
															Height:
															{" " + item.height + "cm"}
															{console.log(item.url.match(/\d/g).join(""))}
														</ListGroupItem>
														<ListGroupItem>Mass {" " + item.mass + "kg"}</ListGroupItem>
														<ListGroupItem>
															Year of birth: {" " + item.birth_year}
														</ListGroupItem>
													</ListGroup>
												</Card.Text>
												<div className="row">
													{store.favorites.includes(item.name) ? (
														<i
															className="fas fa-heart ml-3 my-auto"
															onClick={() => actions.setFavorites(item.name)}
														/>
													) : (
														<i
															className="far fa-heart ml-3 my-auto"
															onClick={() => actions.setFavorites(item.name)}
														/>
													)}
													<Button
														className="ml-auto"
														onClick={() => actions.setFavorites(item.name)}>
														See details
													</Button>{" "}
												</div>
											</Card.Body>
										</Card>
									</Carousel.Item>
								);
							})}
						</Carousel>
					</div>
				</div>
				<div className="col-4">
					<img
						className="titulos mt-10"
						src="https://fontmeme.com/permalink/210405/55aa5998f5d6fe121c15f2de38630555.png"
					/>
					<div className="d-flex justify-content-center">
						{/* <span>{JSON.stringify(store.peopleList)}</span> */}

						<Carousel fade indicators={false} className="carousel" style={{ width: "22rem" }}>
							{store.vehicleList.map((item, index) => {
								return (
									<Carousel.Item key={index} className="d-flex justify-content-center">
										<Card style={{ width: "18rem" }}>
											<Card.Img
												variant="top"
												src={
													//El siguiente codigo sirve para obtener las imagenes basadas en el numero de la url en la API
													"https://starwars-visualguide.com/assets/img/vehicles/" +
													item.url.match(/\d/g).join("") +
													".jpg"
												}
												onError={e => {
													e.target.onerror = null;
													e.target.src =
														"https://starwars-visualguide.com/assets/img/placeholder.jpg";
												}}
												width="100%"
											/>

											<Card.Body>
												<Card.Title>{item.name}</Card.Title>
												<Card.Text>
													<ListGroup className="list-group-flush d-flex pr-auto">
														<ListGroupItem className="pr-aut0">
															Number of passengers:
															{" " + item.passengers}
															{console.log(item.url.match(/\d/g).join(""))}
														</ListGroupItem>
														<ListGroupItem>
															This is a {" " + item.vehicle_class + " vehicle"}
														</ListGroupItem>
														<ListGroupItem>
															Manufacturer: {" " + item.manufacturer}
														</ListGroupItem>
													</ListGroup>
												</Card.Text>
												<div className="row">
													{store.favorites.includes(item.name) ? (
														<i
															className="fas fa-heart ml-3 my-auto"
															onClick={() => actions.setFavorites(item.name)}
														/>
													) : (
														<i
															className="far fa-heart ml-3 my-auto"
															onClick={() => actions.setFavorites(item.name)}
														/>
													)}
													<Button
														className="ml-auto"
														onClick={() => actions.setFavorites(item.name)}>
														See details
													</Button>{" "}
												</div>
											</Card.Body>
										</Card>
									</Carousel.Item>
								);
							})}
						</Carousel>
					</div>
				</div>
				<div className="col-4">
					<img
						className="titulos mt-10"
						src="https://fontmeme.com/permalink/210405/af9d65e131d914c5a13e3f66cf1d55ee.png"
					/>
					<div className="d-flex justify-content-center">
						{/* <span>{JSON.stringify(store.peopleList)}</span> */}

						<Carousel fade indicators={false} className="carousel" style={{ width: "22rem" }}>
							{store.planetsList.map((item, index) => {
								return (
									<Carousel.Item key={index} className="d-flex justify-content-center">
										<Card style={{ width: "18rem" }}>
											<Card.Img
												variant="top"
												src={
													"https://starwars-visualguide.com/assets/img/planets/" +
													item.url.match(/\d/g).join("") +
													".jpg"
												}
												width="100%"
												onError={e => {
													e.target.onerror = null;
													e.target.src =
														"https://starwars-visualguide.com/assets/img/placeholder.jpg";
												}}
											/>
											<Card.Body>
												<Card.Title>{item.name}</Card.Title>
												<Card.Text>
													<ListGroup className="list-group-flush d-flex pr-auto">
														<ListGroupItem className="pr-aut0">
															The climate here is:
															{" " + item.climate}
														</ListGroupItem>
														<ListGroupItem>
															The diameter of this planet is: {" " + item.diameter + "km"}
														</ListGroupItem>
														<ListGroupItem>
															Population: {" " + item.population}
														</ListGroupItem>
													</ListGroup>
												</Card.Text>
												<div className="row">
													{store.favorites.includes(item.name) ? (
														<i
															className="fas fa-heart ml-3 my-auto"
															onClick={() => actions.setFavorites(item.name)}
														/>
													) : (
														<i
															className="far fa-heart ml-3 my-auto"
															onClick={() => actions.setFavorites(item.name)}
														/>
													)}
													<Button
														className="ml-auto"
														onClick={() => actions.setFavorites(item.name)}>
														See details
													</Button>{" "}
												</div>
											</Card.Body>
										</Card>
									</Carousel.Item>
								);
							})}
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
};
