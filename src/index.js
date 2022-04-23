/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

const { __ } = wp.i18n;
import ServerSideRender from '@wordpress/server-side-render';
import { useBlockProps } from '@wordpress/block-editor';

let quizes = [];

wp.apiFetch({path: "wp/v2/quizzes"}).then(fetchedQuizes => {
	quizes = fetchedQuizes;
}).catch();
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
// import Edit from './edit';
import save from './save';
import edit from './edit';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

registerBlockType('gutenberg-block/quizapp', {

	title: __( 'Quiz App', 'quiz' ),
	icon: 'list-view',
	keywords: [
		__('WPC Food List', 'quiz'),
		__( 'WP Cafe' , 'quiz'),
		__( 'Food Tab' , 'quiz'),
	],
	attributes:{
		total_quizes: {
			type: 'integer',
			default: 0
		},
		// wpc_menu_cat: {
		// 	type: "array",
		// 	default: []
		// },
		// wpc_price_show : {
		// 	type: 'string',
		// 	default: 'yes'
		// },
	},

	/**
	 * @see ./edit.js
	 */

	edit,
	// edit: function (props) {
	// 	const blockProps = useBlockProps();
	// 	console.log(props.attributes);
	// 	return (
	// 		<div {...blockProps}>
	// 			<ServerSideRender
	// 				block="gutenberg-block/quizapp"
	// 			/>
	// 		</div>
	// 	);
	// },

	/**
	 * @see ./save.js
	 */
	save,
});
