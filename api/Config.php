<?php
    use helper\Config as Helper_Config;

    class Config extends Rest_Controller {

        protected $helper_config;

        public function __construct(){

            $this->register_route( 'config', array(
                'method' => 'post',
                'callback' => array( $this, 'update')
            ));

            $this->helper_config = new Helper_Config();
        }

        public function update(){
            $name = $_POST['name'];
            $val = $_POST['value'];

            if( isset($name) && isset($val)){
                $this->helper_config->update( $name, $val );
                $this->response(200, array(
                    "status" => 200
                ));
                return;
            }
            $this->response(200, array(
                "status" => 304,
                "message"=>"Fail to set value"
            ));
        }

    }

    $config = new Config();