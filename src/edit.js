import './editor.scss';

import Questions from "./questions";

export default function Edit(props) {
	return [
		<div className={ props.className }>

			<Questions  {...props}/>
		</div>
	];
}
