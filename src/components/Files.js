import React from "react";
import files from "../data/data";
import "../styles/Home.css";
import Tile from "./Tile";
import "../styles/Tile.css";

function Home() {
	return (
		<div className="home">
			<h1>Home</h1>
			<div className="tile">
				<p className="tile__name"> Name </p>
				<p className="tile__unit"> Unit </p>
				<p className="tile__subject"> Subject </p>
				<p className="tile__semester"> Semester </p>
				<p className="tile__likes"> Likes </p>
				<p className="tile__likes"> 👍 </p>
				<p className="tile__view"> V</p>
			</div>
			{files.map((file) => (
				<Tile
					key={file.id}
					name={file.name}
					unit={file.unit}
					subject={file.subject}
					semester={file.semester}
					likes={file.likes}
					target={file.target}
				/>
			))}
		</div>
	);
}

export default Home;
