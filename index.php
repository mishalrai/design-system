<?php
    require_once ('function.php');
    require_once ('template-parts/header.php'); /* Header section */
    require_once ('template-parts/side_bar_menu.php'); /* Side menu */
    require_once ('template-parts/menu_toggler.php'); /* Side menu toggler arrow */

    /* Dynamic section */
    if( !isset($_GET['page']) ) 
        include('page-templates/home-page.php');
    else  
        require 'page-templates/single-page.php';  
    
    /* Footer section */
    require 'template-parts/footer.php';    