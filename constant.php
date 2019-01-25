 <?php
    define ( 'SYSTEM_PATH', __DIR__ );
    define ( 'CONFIG_COOKIE_NAME', 'config');
    define ( 'HTACCESS_COOKIE_NAME', 'project_base');
    define ( 'NAVIGATION_COOKIE_NAME', 'navigation-'.explode( '/', $_SERVER['REQUEST_URI'] )[1]);
    define ( 'HTACCESS_LOCATION', SYSTEM_PATH.'\api\.htaccess');
    
    define ( 'FOLDER_TO_SCAN', array(  
               'components' => SYSTEM_PATH.'\components',
               'layouts' => SYSTEM_PATH.'\layouts',
               'pages' => SYSTEM_PATH.'\pages'
    ));

    $default_config = array(
         'is_menu_open' =>  true
    );  