import React, { useContext, useEffect, Component } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron, Button, Carousel, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();

		actions.fetchPlanets();
		actions.fetchDetailsPlanets();
		actions.fetchStarships();
	}, []);

	let ind;

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
													(index + 1) +
													".jpg"
												}
												width="100%"
											/>
											<Card.Body>
												<Card.Title>{item.name}</Card.Title>
												<Card.Text>
													Some quick example text to build on the card title and make up the
													bulk of the cardcontent.
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
													"https://starwars-visualguide.com/assets/img/vehicles/" +
													(index + 1) +
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
													Some quick example text to build on the card title and make up the
													bulk of the cardcontent.
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
													(index + 1) +
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
															The climate here is:{" "}
														</ListGroupItem>
														<ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
														<ListGroupItem>Vestibulum at eros</ListGroupItem>
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
