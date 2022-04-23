import React from "react";

function Question({ data }) {
	return (
		<div className="sign-up-container">
			<form action="">
				<div className="single-question">
					<h3>title: {data.title.rendered}</h3>
					<label>
						{/*{data.quizzes_meta[question_1]}*/}
						<input type="radio" name="question_1"/>
					</label>

					<label>
						{/*{data.quizzes_meta[question_2]}*/}
						<input type="radio" name="question_2"/>
					</label>
				</div>
			</form>
		</div>
	);
}

export default Question;
