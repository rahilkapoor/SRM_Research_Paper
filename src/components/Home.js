import React, { useState } from "react";
import files from "../data/data";
import "../styles/Home.css";
import Tile from "./Tile";
import "../styles/Tile.css";
import "../styles/Dropdown.css";

function Files() {
	const [data, setData] = useState(files);
	const [unit, setUnit] = useState(1);
	const [sem, setSem] = useState(1);

	const filtersem = data.filter((d) => {
		return d.semester == sem;
	});
	const filterunit = filtersem.filter((d) => {
		return d.unit == unit;
	});

	const handleunit = (e) => {
		setUnit(e.target.value);
	};

	const handlesem = (e) => {
		setSem(e.target.value);
	};

	return (
		<div className="home">
			<h1>Home</h1>
			<div className="tile">
				<p className="tile__name"> Name </p>
				<p className="tile__unit">
					{" "}
					<select name="units" id="units" onChange={handleunit}>
						<option value="1">Unit 1</option>
						<option value="2">Unit 2</option>
						<option value="3">Unit 3</option>
						<option value="4">Unit 4</option>
						<option value="5">Unit 5</option>
					</select>{" "}
				</p>
				<p className="tile__subject"> Subject </p>
				<p className="tile__semester">
					{" "}
					<select name="sem" id="sem" onChange={handlesem}>
						<option value="1">Sem 1</option>
						<option value="2">Sem 2</option>
						<option value="3">Sem 3</option>
						<option value="4">Sem 4</option>
						<option value="5">Sem 5</option>
						<option value="6">Sem 6</option>
						<option value="7">Sem 7</option>
						<option value="8">Sem 8</option>
					</select>{" "}
				</p>
				<p className="tile__likes"> Likes </p>
				<p className="tile__likes"> </p>
				<p className="tile__view"> View</p>
			</div>
			{filterunit.map((file) => (
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

export default Files;
