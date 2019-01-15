<?php
    require_once 'constant.php'; 
    require_once 'helpers/Session.php'; 
    require_once 'helpers/Config.php'; 
    require_once 'helpers/generate_htaccess_file.php';    
    require_once 'helpers/Navigation.php'; 

    require_once 'function.php';
    require_once 'template-parts/header.php'; 
    require_once 'template-parts/side_bar_menu.php'; 
    require_once 'template-parts/menu_toggler.php'; 

    /* Dynamic section */
    if( !isset($_GET['page']) ) 
        include('page-templates/home-page.php');
    else  
        require 'page-templates/single-page.php';  
    
    /* Footer section */
    require 'template-parts/footer.php';    