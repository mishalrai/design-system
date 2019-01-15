<?php   
    use helper\Navigation as Navigation_Helper;

    class Navigation extends Rest_Controller{
        
        protected $navigation_helper;
        function __construct(){
            $this->register_route('navigation/:active', array(
                'method' => 'get',
                'callback' => array( $this, 'generate')
            ));

            $this->register_route('navigation', array(
                'method' => 'get',
                'callback' => array( $this, 'generate')
            ));

            $this->navigation_helper = new Navigation_Helper();
        }

        public function generate( $name = '' ){
            $_GET[ 'page'] = $name;
            $data = $this->navigation_helper->re_generate();
            $this->response( 200, array(
                'data' => $data,
                'status' => 200,
                'message' => 'successfully synced'
            ));
        }
        
    }

    $navigation = new Navigation();
