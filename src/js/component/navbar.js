import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					{" "}
					<img
						src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/756ac3cf-5cef-4bfe-a74e-43e4d713903a/d98b8ef-f36069b2-9799-45c0-9549-7ecac198f0f4.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNzU2YWMzY2YtNWNlZi00YmZlLWE3NGUtNDNlNGQ3MTM5MDNhXC9kOThiOGVmLWYzNjA2OWIyLTk3OTktNDVjMC05NTQ5LTdlY2FjMTk4ZjBmNC5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.dZZyWi0-K0CT6t8QOFdcXPkR7LYFO2X9KjETXRr6m4I"
						width="100"
						height="45"
					/>
				</span>
			</Link>

			<div className="dropdown">
				<button
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favourites
				</button>
				<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
					<a className="dropdown-item" href="#">
						Action
					</a>
				</div>
			</div>
		</nav>
	);
};
