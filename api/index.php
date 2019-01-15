<?php
    /* helper class */
    require_once '../helpers/Session.php';
    require_once '../constant.php';

    /* Derived class */
    require_once 'Rest_Controller.php';

    /* Base class API */
    require_once '../helpers/Navigation.php';  
    require_once '../helpers/Config.php';  
    // require_once 'Config.php';
    require_once 'Download.php';
    require_once 'Navigation.php'; 
    require_once 'Config.php'; 

    Rest_Controller::run();

