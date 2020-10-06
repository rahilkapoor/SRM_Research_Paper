import React from "react";
import "../styles/Tile.css";
// import {
// 	faHome,
// 	faCalculator,
// 	faUpload,
// 	faCode,
// } from "@fortawesome/free-solid-svg-icons";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Tile({ id, name, unit, subject, semester, likes, target }) {
	return (
		<div className="tile">
			<p className="tile__name">{name}</p>
			<p className="tile__unit">{unit}</p>
			<p className="tile__subject">{subject}</p>
			<p className="tile__semester">{semester}</p>
			<p className="tile__likes">{likes}</p>
			<p className="tile__likes">👍</p>
			<p className="tile__view">
				<a href={`${target}`} target="_blank">
					👀
				</a>
			</p>
		</div>
	);
}

export default Tile;
