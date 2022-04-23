import './editor.scss';

import Questions from "./questions";
const { __ } = wp.i18n;

const { serverSideRender: ServerSideRender } = wp;


const { InspectorControls } = wp.blockEditor;

export default function Edit(props) {
	const { setAttributes, attributes, className } = props;

	return [
		<div className={ props.className }>

			<Questions  attr={props}/>
		</div>
	];
}
