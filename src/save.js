import { useBlockProps } from '@wordpress/block-editor';
import Questions from "./questions";

export default function save(props) {

	return (
		<div {...useBlockProps.save()}>
			<Questions  {...props}/>
		</div>
	);
}
