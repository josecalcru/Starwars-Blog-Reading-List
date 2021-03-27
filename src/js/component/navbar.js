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
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/756ac3cf-5cef-4bfe-a74e-43e4d713903a/d98b8ef-f36069b2-9799-45c0-9549-7ecac198f0f4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzU2YWMzY2YtNWNlZi00YmZlLWE3NGUtNDNlNGQ3MTM5MDNhXC9kOThiOGVmLWYzNjA2OWIyLTk3OTktNDVjMC05NTQ5LTdlY2FjMTk4ZjBmNC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.dZZyWi0-K0CT6t8QOFdcXPkR7LYFO2X9KjETXRr6m4I"
						height="50"
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
