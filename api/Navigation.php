<?php 
echo "3";
    //  require_once 'Rest_Controller.php';
    // require_once '../helpers/Navigation.php';
    // use helper\Navigation as Navigation_Helper;

    class Navigation extends Rest_Controller{
        // public $navigation_helper = new Navigation_Helper();

        function __construct(){
            $this->register_route('navigation', array(
                'method' => 'post',
                'callback' => array( $this, 'generate')
            ));

           

            parent::__construct();
        }

        public function generate(){
            echo $navigation_helper->generate();
        }
        
    }

    $navigation = new Navigation();