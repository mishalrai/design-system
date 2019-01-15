 <?php
    
    define ( 'SYSTEM_PATH', __DIR__ );
    define ( 'NAVIGATION_COOKIE_NAME', 'navigation' );
    define ( 'CONFIG_COOKIE_NAME', 'config');
    
    define ( 'FOLDER_TO_SCAN', array( 
               'components' => SYSTEM_PATH.'\components',
               'layouts' => SYSTEM_PATH.'\layouts',
               'pages' => SYSTEM_PATH.'\pages'
    ));

    $default_config = array(
         'is_menu_open' =>  true
    );
    
    