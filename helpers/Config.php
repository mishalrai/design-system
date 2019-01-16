<?php
    namespace helper;
    use helper\Session;

    class Config{

        private $session;

        public function __construct(){
            $this->session = new Session();
            $this->set_default();
        }
        
        /**
         * @access public
         * @uses session->get
         * @return void
         */
        public function get(){
            return $this->session->get(CONFIG_COOKIE_NAME);
        }

        /** 
         * @access public
         * @uses session->set
         * @uses session->isset
         * @return void
         */
        public function set_default(){
            global $default_config;
            if( !$this->session->isset(CONFIG_COOKIE_NAME) ){
                $this->session->set( $default_config, CONFIG_COOKIE_NAME );
            }
        }

        /**
         * @access public
         * @param string $name name of config session
         * @param string $value value of config session['name']
         * @uses session->get
         * @uses session->set
         * @return void  
         */
        public function update( $name, $val ){
            $arr = $this->session->get( CONFIG_COOKIE_NAME );
            $arr[$name] = $val;
            
            $this->session->set( $arr, CONFIG_COOKIE_NAME );
        }

    }

    $config = new Config();