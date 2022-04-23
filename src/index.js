import { registerBlockType } from '@wordpress/blocks';

const { __ } = wp.i18n;


// let quizes = [];
//
// wp.apiFetch({path: "wp/v2/quizzes"}).then(fetchedQuizes => {
// 	quizes = fetchedQuizes;
// }).catch();

let quizes = [
	{
		"id": 6,
		"title": {
			"rendered": "second quiz"
		},

	},
	{
		"id": 5,

		"title": {
			"rendered": "First Quiz"
		},
	}
]

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
