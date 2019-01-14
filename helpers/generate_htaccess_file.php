<?php
    require_once 'Session.php';

    function get_project_base(){
        $uri = explode( '?', $_SERVER[ 'REQUEST_URI' ] );
        return $uri[0];
    }

    function create_htaccess( $state ){
        $get_project_base = get_project_base();
        $_SESSION['project_base'] = $get_project_base; 
        $rules = "RewriteEngine On\nRewriteBase " .$get_project_base. "api/\nRewriteRule ^json/([-A-Za-z0-9]+)$ index.php?url=$1 [L]\nRewriteRule ^json/([-A-Za-z0-9]+)/([-A-Za-z0-9]+)$ index.php?url=$1&id=$2 [L]";
        if($state){
            $file = fopen( "api/.htaccess", "w" );
            fwrite($file, $rules);
            fclose($file);    
        }else{
            $file = file_put_contents("api/.htaccess", $rules );
        }
    }
    
    if( !file_exists( 'api/.htaccess' ) ){
        create_htaccess( true );  
    }else if( file_exists( 'api/.htaccess' ) && isset($_SESSION['project_base']) && $_SESSION['project_base'] !== get_project_base() ){
        create_htaccess( false );  
    }
