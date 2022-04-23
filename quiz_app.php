<?php
/**
 * Plugin Name:       Quiz App
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       quiz_app
 *
 * @package           create-block
 */
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


/**
 * Current plugin path.
 * Current plugin url.
 * Current plugin version.
 */

define( 'QUIZ_PLUGIN_PATH', plugin_dir_path( __FILE__ ) );
define( 'QUIZ_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'QUIZ_PLUGIN_VERSION', '1.0.0' );


// register custom post type
require_once QUIZ_PLUGIN_PATH . 'inc/cpt.php';

function render_template( $settings ) {
	ob_start();
	require_once QUIZ_PLUGIN_PATH . 'inc/template.php';
	return ob_get_clean();
}

function dynamic_content_for_quiz() {
    // automatically load dependencies and version
    $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');

    wp_register_script(
        'load-editor-script',
        plugins_url( 'build/index.js', __FILE__ ),
        $asset_file['dependencies'],
        $asset_file['version']
    );

	$args = array(
		'post_type' => 'quizzes',
		'posts_per_page' => 10,
		'orderby' => 'date',
		'order' => 'ASC'
	);
	$quizzes = new WP_Query( $args );

	wp_localize_script( 'load-editor-script', 'frontend_quiz',
		array(
			'ajaxurl' => admin_url( 'admin-ajax.php' ),
			'quizes' => $quizzes
		)
	);

    register_block_type( 'gutenberg-block/quizapp', array(
        'api_version' => 2,
		"title" => "Quiz App",
        'editor_script' => 'load-editor-script',
        'render_callback' => 'render_template',
		'attributes' => array(
			'total_quizes' => array(
				'type' => 'integer',
				'default'	=> 0
			),
		)
    ) );
}
add_action( 'init', 'dynamic_content_for_quiz' );







