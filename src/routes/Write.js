import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/globals";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";

// import "bootstrap/js/modal";
// import "bootstrap/js/dropdown";
// import "bootstrap/js/tooltip";
// import "bootstrap/dist/css/bootstrap.css";

function Write() {
	const [editorHtml, setEditorHtml] = useState("");
	return (
		<div className="_editor">
			<ReactSummernote
				value={editorHtml}
				options={{
					height: 350,
					dialogsInBody: true,
					toolbar: [
						["style", ["bold", "italic", "underline", "clear"]],
						["fontsize", ["fontsize"]],
						["color", ["color"]],
						["para", ["ul", "ol", "paragraph"]],
						["insert", ["link", "picture", "video"]]
					]
				}}
				onChange={setEditorHtml}
			/>
		</div>
	);
}

export default Write;
