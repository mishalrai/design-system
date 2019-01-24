<?php

    namespace helper;
    class Navigation extends Session { 

        public $name = NAVIGATION_COOKIE_NAME;
        public $folder_to_scan = FOLDER_TO_SCAN;
        public $template = '';
        public $down_arrow = "<span class='icon'><i class='fa fa-angle-down'></i></span>";

        /** 
         * Set Navigation template on session variable
         * @uses get_menu_arr
         * @return template
         * 
         */
        public function set_menu_on_session(){
            $menu_arr = $this->get_menu_arr();
            $this->set( $menu_arr );

          /*   if( count(array_diff_assoc_recursive($menu_arr, $this->get())) ){
                die('something wrong with session');
            } */
        }

        /** 
         * get $menu_array from session if exist otherwise
         * it scan predefined variable $folder_to_scan and return 
         * the menu template
         * @uses generate_template, set_menu_on_session
         * @return $template
         */
        public function get_nav(){   
            if( $this->isset() ){
                return $this->generate_template();
            }
            $this->set_menu_on_session();
            return $this->generate_template();
        }

        /**  
         * It scan predefined variable $folder_to_scan and return
         * the menu template
         * @return $template
         */
        public function re_generate(){
            $this->set_menu_on_session();
            return $this->generate_template();
        }

        /** 
         * scan array of folder and return menu array
         * @return $menu_arr
         */
        function get_menu_arr(){
            $menu_arr = array(); 
            $counter = 0;

            foreach( $this->folder_to_scan as $key => $folder):
                if( file_exists($folder) && sizeof(scandir($folder)) > 2 ):
                    $icon;
                    if( $key ==='components'){
                        $icon = '<i class="fas fa-bezier-curve mr-2"></i>';
                    }else if( $key === 'layouts'){
                        $icon = '<i class="far fa-square mr-2"></i>';
                    }else{
                        $icon = '<i class="far fa-file mr-2"></i>';
                    }


                    $temp_arr = array( "name" => $key, "icon" => $icon, "index"=> $counter, "children" => array() );
                    $counter++;

                    if(is_dir($folder)) :
                        foreach( scandir($folder) as $file_name):

                            if ( !in_array($file_name, array(".","..")) ):
                                array_push(  $temp_arr['children'], array( 
                                        "name"=> $file_name,
                                        "link" => "?cat=".$key."&page=".basename($file_name, '.php'),
                                        "children" => array() 
                                ));
                                // echo '<h1>'.basename($file_name,'.php').$_GET['page'].'<h1>';
                            endif;

                        endforeach;
                    endif;

                    array_push( $menu_arr, $temp_arr );
                endif;
            endforeach;

            return $menu_arr; 
        }


        /**
         * Generate menu template
         * @return $template
         * */
        function recursive( $arr ){
            foreach( $arr as $key => $val){
                if( count ( $val['children'] ) > 0 ){
                    $icon = isset($val['icon']) ? $val['icon'] : '';
                    $this->template .= '<li><a href="#" data-index='.$val['index'].'>'.$icon.$val['name'].$this->down_arrow.'</a><ul>';
                    $this->recursive( $val['children'] );
                }else{
                    $name = basename( $val['name'],'.php');
                    $class_name = isset( $_GET['page'] ) && $_GET['page'] === $name ?'active':'';
                    $this->template .= '<li class="'.$class_name.'"><a href="'.$val['link'].'">'.str_replace("-", " ",$name).'</a></li>';
                    if( count( $arr ) == $key + 1 ){
                        $this->template .= '</ul></li>';
                    }
                }
            }
        }

        /** 
         * Generate Side navigation 
         * @return template
         */
        function generate_template( $arr = array() ){
            if( count( $arr ) == 0 ){
                $arr = $this->get();
              /*   echo "<pre>";
                print_r($arr);
                echo "<pre>"; */
            }

            $this->template = '';
            $this->recursive( $arr );
            return '<ul class="menu">'.$this->template.'</ul>';
        }
}