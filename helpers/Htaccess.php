<?php

    use helper\Session;

    class Htaccess{

        public $session;

        public function __construct(){
            $this->session = new Session();    
            $this->watch();
        }  

        public function watch(){ 
            $is_file_exists =  file_exists( HTACCESS_LOCATION );
            $is_set_on_session = $this->session->isset(HTACCESS_COOKIE_NAME);
            $is_cookie_val = $this->session->get( HTACCESS_COOKIE_NAME );

            if( !$is_file_exists){
                $this->create_file( true );  
            }else if( $is_file_exists && $is_set_on_session && $is_cookie_val !== $this->base_url() ){
                $this->create_file( false );  
            }
        }

        public function create_file( $state ){
            $get_project_base = $this->base_url();
            $this->session->set( $get_project_base, HTACCESS_COOKIE_NAME);
            $rules = "RewriteEngine On\nRewriteBase " .$get_project_base. "api/\nRewriteRule ^json/([-A-Za-z0-9]+)$ index.php?url=$1 [L]\nRewriteRule ^json/([-A-Za-z0-9]+)/([-A-Za-z0-9]+)$ index.php?url=$1&id=$2 [L]";
            
            if($state){
                $file = fopen( HTACCESS_LOCATION, "w" );
                fwrite($file, $rules);
                fclose($file);    
            }else{
                $file = file_put_contents(HTACCESS_LOCATION, $rules );
            }
        }

        public function base_url(){
            $uri = explode( '?', $_SERVER[ 'REQUEST_URI' ] );
            return $uri[0];
        }

    }

    $htaccess = new Htaccess();