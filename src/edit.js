import './editor.scss';
import './SignUpInfo';
import './PersonalInfo';
import './OtherInfo';
import { useState, useEffect } from '@wordpress/element';
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import OtherInfo from "./OtherInfo";
const { __ } = wp.i18n;
const {
	TextControl,
	SelectControl,
	Toolbar,
	Button,
	Tooltip,
	PanelBody,
	PanelRow,
	FormToggle,
	ToggleControl,
	ToolbarGroup,
	Disabled,
	RadioControl,
	RangeControl,
	FontSizePicker,
} = wp.components;

const { serverSideRender: ServerSideRender } = wp;


const { InspectorControls } = wp.blockEditor;

let quizes = frontend_quiz.quizes.posts;

setTimeout(function(){
	wp.apiFetch({path: "wp/v2/quizzes"}).then(fetchedQuizes => {
		quizes = fetchedQuizes;
	}).catch();
}, 1000);


export default function Edit(props) {
	const { setAttributes, attributes, className } = props;

	const [page, setPage] = useState(0);
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		confirmPassword: "",
		firstName: "",
		lastName: "",
		username: "",
		nationality: "",
		other: "",
	});

	const FormTitles = ["Sign Up", "Personal Info", "Other"];

	const PageDisplay = () => {
		quizes.map( (quiz) => {
			console.log(quiz)
			return <h1>{quiz}</h1>
		});

		// if (page === 0) {
		// 	return <SignUpInfo formData={formData} setFormData={setFormData} />;
		// 	// return <SignUpInfo formData={formData} setFormData={setFormData} />;
		// } else if (page === 1) {
		// 	return <PersonalInfo formData={formData} setFormData={setFormData} />;
		// } else {
		// 	return <OtherInfo formData={formData} setFormData={setFormData} />;
		// }
	};

	return [
		<div className={ props.className }>
			<form>
				<div className="progressbar">
					<div
						style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
					></div>
				</div>
				<div className="form-container">
					<div className="header">
						<h1>{FormTitles[page]}</h1>
					</div>
					<div className="body">{PageDisplay()}</div>
					<div className="footer">
						<button
							disabled={page == 0}
							onClick={() => {
								setPage((currPage) => currPage - 1);
							}}
						>
							Prev
						</button>
						<button
							onClick={() => {
								if (page === FormTitles.length - 1) {
									alert("FORM SUBMITTED");
									console.log(formData);
								} else {
									setPage((currPage) => currPage + 1);
								}
							}}
						>
							{page === FormTitles.length - 1 ? "Submit" : "Next"}
						</button>
					</div>
				</div>
			</form>
			{/*<ServerSideRender*/}
			{/*	block="gutenberg-block/quizapp"*/}

			{/*	attributes = {{*/}
			{/*		total_quizes : attributes.total_quizes,*/}

			{/*	}}*/}
			{/*/>*/}
		</div>
	];
}
