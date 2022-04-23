import React from "react";
import Question from "./Question";
// const { useEffect, useState } = wp.element;

function Questions(props) {
	const {setAttributes, attributes} = props;
	let {page, quizes, loading} = props.attributes;
	// let [quizedata, setQuizeData] = useState([])
	// const [loading, setLoading] = useState(1)
	// let loading = 1;

	let quizedata = [
		{
			"id": 6,
			"title": {
				"rendered": "second quiz"
			},
			"quizzes_meta": {
				"option_1": [
					"first option"
				],
				"option_2": [
					"second option"
				],
				"answer": [
					"option_1"
				]
			},
		},
		{
			"id": 5,
			"title": {
				"rendered": "First Quiz"
			},
			"quizzes_meta": {
				"option_1": "first option",
				"option_2": "second option",
				"answer": "option_2"
			}
		}
	];

	// useEffect(() => {
	// 	wp.apiFetch({path: "wp/v2/quizzes"}).then(fetchedQuizes => {
	// 		setQuizeData(fetchedQuizes);
	// 		console.log(quizedata)
	// 		loading = false;
	// 	}).catch();
	// })

	// setTimeout(function(){
	// 	wp.apiFetch({path: "wp/v2/quizzes"}).then(fetchedQuizes => {
	// 		setQuizeData(fetchedQuizes);
	// 		console.log(quizedata)
	// 	}).catch();
	// },3000);


	return (
		<div className="Form">
			{
				loading &&
				<div className="form-container">
					{
						quizedata.map( (quiz) => {
							return <Question data = {quiz} />
						})
					}

					<div className="form-footer">
						<input type="submit" value="Submit Quiz"/>
					</div>
				</div>
			}
			{
				!loading &&
				<div className="loader">
					Loading...
				</div>
			}

		</div>
	);
}

export default Questions;
