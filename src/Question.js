function Question( data ) {

	function findValueByPrefix(object, prefix) {
		let options = [];
		for (var property in object) {
			if (object.hasOwnProperty(property) &&
				property.toString().startsWith(prefix)) {
				options.push(object[property]);
			}
		}

		return options;
	}

	let quiz_options = findValueByPrefix(data.data.quizzes_meta, "option_");

	return (
		<div className="sign-up-container">
			<form action="">
				<div className="single-question">
					<h3>Question: {data.data.title.rendered}</h3>
					{
						quiz_options.map( (option) => {
							return (
								<div className="single-option">
									<label>
										{ option }
										<input type="radio" name="{ option }"/>
									</label>
									<br />
								</div>
							)
						})
					}
				</div>
			</form>
		</div>
	);
}

export default Question;
