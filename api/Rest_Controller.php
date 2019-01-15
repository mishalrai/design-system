<?php 
abstract class Rest_Controller{

	protected static $routes;

	public $private_routes;

	public function __construct(){
		$this->private_routes = [];
	}

	public static function run(){
		$url = $_GET[ 'url' ];
		$method = strtolower( $_SERVER['REQUEST_METHOD'] );
		$id = isset( $_GET[ 'id' ] ) && !empty( $_GET[ 'id' ] ) ? true: false;		
		$key = false;

		foreach( self::$routes as $i => $r ){
			if( $r[ 'method' ] == $method && $r[ 'url' ] == $url && $id === $r[ 'id' ] ){
				$key = $i;
			}
		}

		if( $key !== false && isset( self::$routes[$key] )){
			$route = self::$routes[ $key ];
			if( $route['id'] ){
				call_user_func_array( $route['callback'], array($_GET['id']) );
			}else{
				call_user_func( $route['callback'] );
			}
		}else{
			self::invalid_route();
		}
	}

	public function register_route( $url, $payload ){

		$route = explode( '/:', $url );
		if( count( $route ) == 1 ){
			$id = false;
		}else{
			$id = true;
			$url = $route[ 0 ];
		}
		
		$arr = array(
			'id'       => $id,
			'url'      => $url,
			'method'   => $payload[ 'method' ],
			'callback' => $payload[ 'callback' ]
		);
		$this->private_routes[] = $arr;
		self::$routes[] = $arr;
	}

	public static function invalid_route(){
		self::response( 404, array(
			'message' => 'Invalid Route',
			'status' => 404
		));
	}

	public static function response( $status = 200, $data ){
		header('Content-Type: application/json');
		http_response_code( $status );
		echo json_encode($data);
		die;
	}
}
