<?php

    class Settings extends Rest_controller{

        public function __construct(){
            $this->register_route('setting', array(
                'method' => 'post',
                'callback' => array( $this, 'update' )
            ));
            parent::__construct();
        }
        
        public function update(){
            $data = json_decode( $_POST['data'] );
        }
    }

    $updateSetting = new Setting();
