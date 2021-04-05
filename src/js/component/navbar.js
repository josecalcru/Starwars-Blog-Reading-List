import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Image, Nav, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar className="row">
			<div className="col-8">
				<Navbar.Brand>
					<Link to="/">
						<Image
							src="https://fontmeme.com/permalink/210405/1cacf80ec53e118dcf0510505f815204.png"
							alt="Start Wars"
							width="100%"
							className="img-responsive"
						/>
					</Link>
				</Navbar.Brand>
			</div>
			<div className="col-3 ml-auto">
				<Nav className="ml-auto" />
				<Link className="" to="/characters" />
				<Link className="" to="/planets" />
				<Dropdown className="favorite-button">
					<Dropdown.Toggle width="100%" id="dropdown-basic">
						<img
							src="https://fontmeme.com/permalink/210404/b72661c793061779feb829bb57197725.png"
							alt="star-wars-font"
							border="0"
							width="100%"
							className="ml-auto"
						/>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{store.favorites.map((item, index) => {
							return (
								<Dropdown.Item key={index} href="#/action-1">
									{item}
								</Dropdown.Item>
							);
						})}
					</Dropdown.Menu>
				</Dropdown>
			</div>
		</Navbar>
	);
};
