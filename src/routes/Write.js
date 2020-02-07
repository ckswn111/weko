import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/globals";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import Resizer from "react-image-file-resizer";

function Write({ location }) {
	const [editorHtml, setEditorHtml] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const onChange = v => {
		setEditorHtml(v);
	};
	const handleImg = fileList => {
		const reader = new FileReader();

		// reader.onloadend = () => {
		// 	ReactSummernote.insertImage(reader.result);
		// };
		Resizer.imageFileResizer(
			fileList[0],
			800,
			800,
			"JPEG",
			80,
			0,
			uri => {
				ReactSummernote.insertImage(uri);
			},
			"base64"
		);
		// reader.readAsDataURL(fileList[0]);
	};
	// = file => {
	// 	console.log(file);
	// 	ReactSummernote.insertImage(
	// 		// `/resources/getImage?imageGuid=${image.imageGuid}`,
	// 		''
	// 		$image => {
	// 			$image.css("width", Math.floor($image.width() / 2));
	// 			$image.attr("alt", image.name);
	// 		}
	// 	);
	// };
	const onFocus = () => {
		setIsFocus(true);
	};

	return (
		<div className={"_editor" + (isFocus ? " is-focus" : "")}>
			<span className="editor-title">{location.name}</span>
			<ReactSummernote
				value={editorHtml}
				options={{
					placeholder: "여기에 글을 써주세요.",
					minHeight: 500,
					spellCheck: false,
					disableResizeEditor: false,
					dialogsInBody: true,
					toolbar: [
						["style", ["bold", "italic", "underline", "clear"]],
						["fontsize", ["fontsize"]],
						["color", ["color"]],
						["para", ["ul", "ol", "paragraph"]],
						["insert", ["link", "picture", "video"]]
					]
				}}
				onChange={onChange}
				onImageUpload={handleImg}
				onFocus={onFocus}
			/>
			<div dangerouslySetInnerHTML={{ __html: editorHtml }}></div>
		</div>
	);
}

export default Write;
