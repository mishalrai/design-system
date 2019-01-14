<?php
require('zip.php');

class Download extends Rest_Controller{

	public function __construct(){
		$this->register_route( 'download', array(
			'method'   => 'post',
			'callback' => array( $this, 'download_files' )
		));

		$this->register_route('navigation/:id', array(
			'method' => 'get',
			'callback' => array( $this, 'test')
		));
		parent::__construct();
	}

	function test( $id ){
		$this->response( 200, array( 'tes' => $id ) );
	}

	public function download_files(){
		$data = json_decode($_POST['data']);
		$zip_file = 'download.zip'; // name for downloaded zip file
		$ziper = new zipfile();
		$ziper->prefix_name = ''; // here you create folder which will contain downloaded files
		$ziper->addFiles($data);  // array of files
		$ziper->output($zip_file); 
		echo $ziper->forceDownload($zip_file);
		@unlink($zip_file);
	}
	
}

$download = new Download();