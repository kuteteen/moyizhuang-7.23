<?php
if ( !empty( $saxueTset['saxue_contents_template'] ) ) {
		if ( !isset( $saxueTset['saxue_contents_cacheid'] ) ) {
				$saxueTset['saxue_contents_cacheid'] = null;
		} 
		if ( !isset( $saxueTset['saxue_contents_compileid'] ) ) {
				$saxueTset['saxue_contents_compileid'] = null;
		} 
		$saxueTpl -> assign( "saxue_contents", $saxueTpl -> fetch( $saxueTset['saxue_contents_template'], $saxueTset['saxue_contents_cacheid'], $saxueTset['saxue_contents_compileid'] ) );
} 
$saxueTpl -> setcaching( 0 );
$saxueTpl -> setcachtype( 0 );
$saxueTpl -> display( SAXUE_ROOT_PATH . "/templates/admin/plugin_config.html" );
saxue_freeresource();
if ( defined( "SAXUE_DEBUG_MODE" ) && 0 < SAXUE_DEBUG_MODE ) {
		$runtime = explode( " ", microtime() );
		$debuginfo = "Processed in " . round( $runtime[1] + $runtime[0] - SAXUE_START_TIME, 6 ) . " second(s), ";
		if ( function_exists( "memory_get_usage" ) ) {
				$debuginfo .= "Memory usage " . round( memory_get_usage() / 1024 ) . "K, ";
		} 
		$sqllog = $included_files = array();
		$included_files = get_included_files();
		$includeds = count( $included_files ) - 1;
		$debuginfo .= "Include " . $includeds . " files, ";
		if ( defined( "SAXUE_DB_CONNECTED" ) ) {
				$instance = &saxuedatabase :: retinstance();
				if ( !empty( $instance ) ) {
						foreach ( $instance as $db ) {
								$sqllog = array_merge( $sqllog, $db -> sqllog( "ret" ) );
						} 
				} 
		} 
		$queries = count( $sqllog );
		$debuginfo .= $queries . " queries, ";
		if ( defined( "SAXUE_USE_GZIP" ) && 0 < SAXUE_USE_GZIP ) {
				$debuginfo .= "Gzip enabled.";
		} else {
				$debuginfo .= "Gzip disabled.";
		} 
		if ( 0 < $includeds ) {
				unset( $included_files[0] );
				$debuginfo .= "<br /> Include Files:";
				foreach ( $included_files as $files ) {
						$debuginfo .= "<br />" . $files;
				} 
		} 
		if ( 0 < $queries ) {
				$debuginfo .= "<br /> SQL Queries:";
				foreach ( $sqllog as $sql ) {
						$debuginfo .= "<br />" . $sql;
				} 
		} 
		echo "<div class=\"debug\">" . $debuginfo . "</div>";
} 