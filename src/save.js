import { useBlockProps } from '@wordpress/block-editor';
import Questions from "./questions";

export default function save(props) {
	const { setAttributes, attributes, className } = props;

	return (
		<div {...useBlockProps.save()}>
			<Questions  attr={props}/>
		</div>
	);
}
