import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Image, Nav, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);
	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<Image
						src="https://fontmeme.com/permalink/210404/c3104ffe606f945b0acdc7b6d24c610b.png"
						height="100"
						alt="Start Wars"
					/>
				</Link>
			</Navbar.Brand>

			<Nav className="mr-auto" />
			<Link className="" to="/characters" />
			<Link className="" to="/planets" />
			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown Button
					{store.favorites.length}
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
		</Navbar>
	);
};
