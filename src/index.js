import { registerBlockType } from '@wordpress/blocks';

const { __ } = wp.i18n;

import './style.scss';

/**
 * Internal dependencies
 */
// import Edit from './edit';
import save from './save';
import edit from './edit';


registerBlockType('gutenberg-block/quizapp', {

	title: __( 'Quiz App', 'quiz' ),
	icon: 'list-view',
	keywords: [
		__('WPC Food List', 'quiz'),
		__( 'WP Cafe' , 'quiz'),
		__( 'Food Tab' , 'quiz'),
	],
	attributes:{
		page: {
			type: 'integer',
			default: 0
		},
		quizes : {
			type: "array",
			default: []
		},
		loading : {
			type: "boolean",
			default: true
		}
	},

	/**
	 * @see ./edit.js
	 */

	edit: edit,

	/**
	 * @see ./save.js
	 */
	save,
});
