import React from "react";
import Question from "./Question";
import {useState, useEffect} from '@wordpress/element';

function Questions({attr}) {
	// console.log(attr, "ab");
	// let {setAttributes, attributes} = attr;
	// let {page, quizes} = attributes;
	// let [quizedata, setQuizeData] = useState([])

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



	const PageDisplay = () => {
		// console.log(quizes);
		return quizedata.map( (quiz) => {
			return <Question data = {quiz} />
		});

	};

	//
	// setTimeout(function(){
	// 	wp.apiFetch({path: "wp/v2/quizzes"}).then(fetchedQuizes => {
	// 		setQuizeData(fetchedQuizes);
	// 		console.log(quizedata)
	// 	}).catch();
	// },3000);




	return (
		<div className="Form">
			<div className="form-container">
				{PageDisplay()}
			</div>
		</div>
	);
}

export default Questions;
