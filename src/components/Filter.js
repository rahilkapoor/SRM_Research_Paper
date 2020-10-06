import React, { useState, useEffect } from "react";
import "../styles/Filter.css";
import files from "../data/data";

function Filter() {
	const [data, setData] = useState(files);
	const [unit, setUnit] = useState(1);
	const [sem, setSem] = useState(1);
	// const [filtersem, setfiltersem] = useState([]);
	// const [filterunit, setfilterunit] = useState([]);

	// useEffect(() => {
	// 	setfiltersem(
	// 		data.filter((d) => {
	// 			return d.semester == sem;
	// 		})
	// 	);
	// }, [data, sem]);

	// useEffect(() => {
	// 	setfilterunit(
	// 		filtersem.filter((d) => {
	// 			return d.unit == unit;
	// 		})
	// 	);
	// }, [unit, filtersem]);

	// console.log(filter);

	// without useEffect
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
		<div className="filter">
			<select name="units" id="units" onChange={handleunit}>
				<option value="1">Unit_1</option>
				<option value="2">Unit_2</option>
				<option value="3">Unit_3</option>
				<option value="4">Unit_4</option>
				<option value="5">Unit_5</option>
			</select>
			<select name="sem" id="sem" onChange={handlesem}>
				<option value="1">Sem_1</option>
				<option value="2">Sem_2</option>
				<option value="3">Sem_3</option>
				<option value="4">Sem_4</option>
				<option value="5">Sem_5</option>
				<option value="6">Sem_6</option>
				<option value="7">Sem_7</option>
				<option value="8">Sem_8</option>
			</select>
			{filterunit.map((d) => (
				<div className="files">
					<p>{d.name}</p>
					<p className="unit">unit : {d.unit}</p>
					<p className="unit">semester : {d.semester}</p>
				</div>
			))}
		</div>
	);
}

export default Filter;
