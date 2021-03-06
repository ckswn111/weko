import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../components/globals";
import ReactSummernote from "react-summernote";
import "react-summernote/dist/react-summernote.css";
import Resizer from "react-image-file-resizer";
import axios from "axios";
import { Icon, Modal } from "semantic-ui-react";
import { Prompt } from "react-router";
import { useGlobalState, setNavName } from "../state.js";

const config = require("../config.json");
let numIMG = 0;
function Write({ location }) {
	const [editorHtml, setEditorHtml] = useState("");
	const [isFocus, setIsFocus] = useState(false);
	const [modalOpen, setModelOpen] = useState(false);

	const [currentNav] = useGlobalState("currentNav");

	const onChange = v => {
		setEditorHtml(v);
	};
	//ask user if want to leave unsaved chages when HARD REFRESH
	function beforeunload(e) {
		console.log("object");
		e.preventDefault();
		if (isFocus) {
			e.returnValue = true;
		}
	}
	useEffect(() => {
		window.addEventListener("beforeunload", beforeunload);
		var currentURL = window.location.pathname.split("/")[1];
		if (currentURL !== currentNav) {
			setNavName(currentURL);
		}
		console.log(currentNav);
		// Specify how to clean up after this effect:
		return function cleanup() {
			window.removeEventListener("beforeunload", beforeunload);
		};
	});

	const handleImg = fileList => {
		let res = [];
		setModelOpen(true);
		Object.keys(fileList).map((key, i) => {
			Resizer.imageFileResizer(
				fileList[key],
				1200,
				1200,
				"JPEG",
				90,
				0,
				async uri => {
					const imgInfo = {
						action: "upload",
						img: uri.replace(/^data:image\/\w+;base64,/, ""),
						num: i,
						name: "news_img_test" + numIMG++ + ".jpeg"
					};

					try {
						res.push(
							await axios.post(`${config.api.uploadIMG}`, imgInfo, {
								headers: {
									"Content-Type": "application/json"
								}
							})
						);
						console.log(res);
					} catch (err) {
						console.log(`error adding data: ${err}`);
					}
					if (res.length === fileList.length) {
						res.sort(function(a, b) {
							return a.data.num - b.data.num;
						});
						var index = 0;
						setModelOpen(false);
						(function insertIMG() {
							if (index < res.length) {
								ReactSummernote.insertImage(res[index].data.Location);
								index++;
								setTimeout(insertIMG, 300);
							}
						})();
					}
				},
				"base64"
			);
		});
	};

	const onFocus = () => {
		setIsFocus(true);
	};
	const oc = async () => {
		let res;
		const imgInfo = {
			action: "delete",
			names: []
		};
		//find which is deleted
		for (var i = 0; i < numIMG; i++) {
			if (!editorHtml.includes("news_img_test" + i + ".jpeg")) {
				imgInfo.names.push("news_img_test" + i + ".jpeg");
			}
		}
		console.log(numIMG);
		console.log(imgInfo);
		if (imgInfo.names.length !== 0) {
			try {
				res = await axios.post(`${config.api.uploadIMG}`, imgInfo, {
					headers: {
						"Content-Type": "application/json"
					}
				});
				console.log(res);
			} catch (err) {
				console.log(`error adding data: ${err}`);
			}
		}
	};

	return (
		<div className={"_editor" + (isFocus ? " is-focus" : "")}>
			<React.Fragment>
				<Prompt
					when={isFocus}
					message="글을 아직 게시하지 않았습니다. 정말 페이지를 떠나시길 원하십니까?"
				/>
				{/* Component JSX */}
			</React.Fragment>
			<Modal open={modalOpen} basic size="small">
				{/* <Header icon="browser" content="Cookies policy" /> */}
				<Modal.Content>
					<span>
						<Icon loading name="spinner" />
					</span>
					<span> 이미지를 업로딩중입니다...</span>
				</Modal.Content>
			</Modal>
			{/* <button onClick={oc}>BUTTON</button> */}
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
						// ["color", ["color"]],
						["para", ["ul", "ol", "paragraph"]],
						["insert", ["link", "picture", "video"]]
					]
				}}
				onChange={onChange}
				onImageUpload={handleImg}
				onFocus={onFocus}
			/>{" "}
			<div
				dangerouslySetInnerHTML={{
					__html: editorHtml
				}}
			></div>
		</div>
	);
}

export default Write;
