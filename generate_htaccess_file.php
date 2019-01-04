<?php
    
    session_start();
    
    function get_project_base(){
        $uri = explode( '?', $_SERVER[ 'REQUEST_URI' ] );
        return $uri[0];
    }

    function create_htaccess(){
        $get_project_base = get_project_base();
        $_SESSION['project_base'] = $get_project_base; 
        $file = fopen( "api/.htaccess", "w" );
        $rules = "RewriteEngine On\nRewriteBase " .$get_project_base. "api/\nRewriteRule ^json/([-A-Za-z0-9]+)$ index.php?url=$1 [L]\nRewriteRule ^json/([-A-Za-z0-9]+)/([0-9]+)$ index.php?url=$1&id=$2 [L]";
        fwrite($file, $rules);
        fclose($file);    
    }
    
    if( !file_exists( 'api/.htaccess' ) || file_exists( 'api/.htaccess' ) && $_SESSION['project_base'] !== get_project_base() ){
        create_htaccess();
    }