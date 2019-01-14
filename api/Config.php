<?php

    class Config extends Rest_Controller {

        private $session_name = 'config';
        protected $session = new Session();
        private $default_config = array(
            'is_side_menu_open' => false,
            'selected_child' => 0,  
        );

        public function __construct(){
            $this->register_route( 'config', array(
                'method' => 'post',
                'callback' => array( $this, 'update')
            ))
            parent::__construct();
            $this->set_initial_config();
        }

        public function set_initial_config(){
            if( !$session->isset( $this->$session_name) ){
                $this->$session->fromArray( $this->$default_config );
            }
        }

        public function update( $name, $value){
            $this->$session->set( $name, $value );
        }

    }

    $config = new Config();