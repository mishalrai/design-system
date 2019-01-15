<?php

class Config{

    private $session;

    public function __construct(){
        $this->session = new Session();
    }


    public function get(){
        
    }


    /**
     * 
     */
    public function set( $val ){
        $arr = $this->session->get( CONFIG_COOKIE_NAME )['is_menu_open'] = $val;
        $this->session->set( CONFIG_COOKIE_NAME, $arr );
    }

}