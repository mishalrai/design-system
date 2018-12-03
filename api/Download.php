<?php

require_once('../zip.php');

class Download extends Rest_Controller{

	public function __construct(){
		$this->register_route( 'download', array(
			'method'   => 'post',
			'callback' => array( $this, 'download_files' )
		));
		parent::__construct();
	}

	public function download_files(){
		
		$data = array( 
			'../assets/src/scss/components/btns/_test.scss', 
		'../components/btns.php' );
		// $this->response( 200, array( 'data' => $_POST ) );
		$zip_file = 'download.zip'; // name for downloaded zip file
		$ziper = new zipfile();
		$ziper->prefix_name = ''; // here you create folder which will contain downloaded files
		$ziper->addFiles($data);  // array of files
		$ziper->output($zip_file); 
		echo $ziper->forceDownload($zip_file);
		@unlink($zip_file);
		//die;

		$res = $ziper;

		// $this->response( 200, array(
		// 	'data' => $res
		// ));
	}
}

$download = new Download();