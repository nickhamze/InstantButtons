<?php
/*
Plugin Name: InstantButtons
Plugin URI:  https://secretpizza.party
Description: Turn the boring WooCommerce Dropdowns into neat buttons.
Version:     1.0
Author:      secret pizza party
Author URI:  https://secretpizza.party
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: ib
*/

function ib_script_time() {
    wp_enqueue_style( 'ib_style',  plugin_dir_url( __FILE__ ) . '/ib_style.css'  );
    wp_enqueue_script( 'ib_js', plugin_dir_url( __FILE__ ) . '/ib_script.js' , array(), '1.0.0', true );
}
add_action( 'wp_enqueue_scripts', 'ib_script_time' );

 ?>
