<?php
    namespace helper;
    use helper\Session;
    class Config{

        private $session;

        public function __construct(){
            $this->session = new Session();
            $this->set_default();
        }

        public function get(){
            return $this->session->get(CONFIG_COOKIE_NAME);
        }

        public function set_default(){
            global $default_config;
            if( !$this->session->isset(CONFIG_COOKIE_NAME) ){
                $this->session->set( $default_config, CONFIG_COOKIE_NAME );
            }
        }

        /**
         * 
         */
        public function update( $name, $val ){
            $arr = $this->session->get( CONFIG_COOKIE_NAME );
            $arr[$name] = $val;
            
            $this->session->set( $arr, CONFIG_COOKIE_NAME );
        }

    }

    $config = new Config();