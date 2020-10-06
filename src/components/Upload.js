import React from "react";
import { useDropzone } from "react-dropzone";
import "../styles/Upload.css";
import FileInfo from "./FileInfo";

function Upload() {
	const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

	const files = acceptedFiles.map((file) => (
		<FileInfo key={file.path} name={file.name} size={file.size} />
	));

	return (
		<section className="container">
			<div {...getRootProps({ className: "dropzone" })}>
				<input className="container__input" {...getInputProps()} />
				<p className="container__p">
					Drag and Drop PDFs/Docs/PPT files || Click to Choose files!
				</p>
			</div>
			<h4>Files</h4>
			<aside className="upload__info">
				<p>{files}</p>
			</aside>
		</section>
	);
}

export default Upload;
