import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export const Card = () => (
	<div className="card" style={{ width: "25rem" }}>
		<img src="..." className="card-img-top" alt="..." />
		<div className="card-body">
			<h5 className="card-title">Card title</h5>
			<p className="card-text">
				Some quick example text to build on the card title and make up the bulk of the card&apos;s content.
			</p>
			<a href="#" className="btn btn-primary">
				Go somewhere
			</a>
			<FontAwesomeIcon icon={faHeart} />
		</div>
	</div>
);
