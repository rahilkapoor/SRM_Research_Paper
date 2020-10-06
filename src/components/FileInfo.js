import React from "react";
import "../styles/FileInfo.css";

function FileInfo({ key, name, size }) {
	return (
		<div className="fileinfo">
			<p>{name}</p>
			<p>{size} bytes</p>
			<input type="text" placeholder="name" />
			<select name="units" id="units">
				<option value="1">Unit 1</option>
				<option value="2">Unit 2</option>
				<option value="3">Unit 3</option>
				<option value="4">Unit 4</option>
				<option value="5">Unit 5</option>
			</select>
			<input type="dropdown" placeholder="sub" />
			<select name="sem" id="sem">
				<option value="1">Sem 1</option>
				<option value="2">Sem 2</option>
				<option value="3">Sem 3</option>
				<option value="4">Sem 4</option>
				<option value="5">Sem 5</option>
				<option value="6">Sem 6</option>
				<option value="7">Sem 7</option>
				<option value="8">Sem 8</option>
			</select>
		</div>
	);
}

export default FileInfo;
