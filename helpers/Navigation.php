<?php
    // namespace helper;
    require_once 'Session.php';
    require_once 'constant.php';

    class Navigation extends Session {

        public $name = NAVIGATION_COOKIE_NAME;
        public $folder_to_scan = FOLDER_TO_SCAN;

        function __construct(){
            parent::__construct();
        }

        /*
         * Check navigation isset on session 
         * @return boolean
         */
        function isset_nav(){
            return $this->isset($this->name);
        }

        /* 
         * Set Navigation template on session variable
         * @return template
         *  */
        public function set_menu_on_session(){
            $menu_arr = $this->get_menu_arr();
            $this->set( $this->name, $menu_arr );
            return $menu_arr;
        }

        /* 
         * get $menu_array from session if exist otherwise
         * it scan predefined variable $folder_to_scan and return 
         * the menu template
         * @return $template
         */
        public function get_nav(){   
            if( $this->isset_nav() ){
                echo "<h1>Restore from session </h1>";
                $menu_arr = $this->get( $this->name );
                return $this->generate_template( $menu_arr );
            }
            echo "<h1> Rescanning folders </h1>";
            return $this->generate_template ( $this->set_menu_on_session() );
        }

        /*  
         * It scan predefined variable $folder_to_scan and return
         * the menu template
         * @return $template
         */
        public function re_generate(){
            return $this->generate_template( $this->set_menu_on_session() );
        }

        /* 
         * scan array of folder and return menu array
         * @return $menu_arr
         */
        function get_menu_arr(){
            $menu_arr = array();

            foreach( $this->folder_to_scan as $key => $folder):
                if( file_exists($folder) && sizeof(scandir($folder)) > 2 ):
                    
                    $temp_arr = array( "name" => $key, "children" => array() );

                    if(is_dir($folder)) :
                        foreach( scandir($folder) as $file_name):

                            if ( !in_array($file_name, array(".","..")) ):
                                array_push(  $temp_arr['children'], array( 
                                        "name"=> $file_name, 
                                        "children" => array() 
                                ));
                            endif;

                        endforeach;
                    endif;

                    array_push( $menu_arr, $temp_arr );
                endif;
            endforeach;

            return $menu_arr; 
        }


        /*
         * Generate menu template
         * @return $template
         * */
        function recursive( $arr, $template ){
            foreach( $arr as $key => $val){
                if( sizeof ( $val['children'] ) > 0){
                    echo '<li>'.$val['name'].'</li>';
                    $this->recursive( $val['children'], $template );
                }else{
                    echo '<li>'.$val['name'].'</li>';
                }
            }
            return $template;
        }

        /* 
         * Generate Side navigation 
         * @return template
         */
        function generate_template( $arr ){
            $template = '<ul>';
            $this->recursive( $arr, $template );
            // $template = '</ul>';
            // echo $template . '<h1> Return </h1>';
            echo '<pre>';
            print_r($arr);
            echo '</pre>';
            return false;
        }


    }