 <?php
    
    define ( 'SYSTEM_PATH', __DIR__ );
    define ( 'NAVIGATION_COOKIE_NAME', 'navigation' );
    define ( 'FOLDER_TO_SCAN', array( 
               'components' => SYSTEM_PATH.'\components',
               'layouts' => SYSTEM_PATH.'\layouts',
               'pages' => SYSTEM_PATH.'\pages'
    ));

    $defaultConfig = array(
         'is_menu_open' =>  true
    );
    
    