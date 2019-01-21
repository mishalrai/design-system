<?php
/* Test comment for function.php */
    if( isset($_POST['data']['function']) && isset($_POST['data']['files'] )){
        $files = $_POST['data']['files'];
        $_POST['data']['function']($files); 
    }

    function get_project_base(){
        $uri = explode( '?', $_SERVER[ 'REQUEST_URI' ] );
        return $uri[0];
    }

    function get_base_url(){
        return sprintf(
            "%s://%s%s",
            isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off' ? 'https' : 'http',
            $_SERVER['SERVER_NAME'],
            get_project_base()
          );
    }

    function get_home_url(){
        echo "/".explode('/', $_SERVER['REQUEST_URI'])[1];
    };

    function get_build_url(){
        return get_base_url().'/assets/build/';
    }

    function get_files_array(){
        $return_arr = array();
        $folders = ['components', 'layouts', 'pages'];
        foreach( $folders as $folder):
            if( file_exists($folder) && sizeof(scandir($folder)) > 2 ):
                
                $temp_arr = array( "name" => $folder, "children" => array() );

                if( is_dir($folder) ) :
                    foreach( scandir($folder) as $file_name):
                        if ( !in_array($file_name, array(".","..")) ):
                            array_push(  $temp_arr['children'], array( 
                                    "name"=> $file_name, 
                                    "children" => array() 
                            ));
                        endif;

                    endforeach;
                endif;

                array_push( $return_arr, $temp_arr );
            endif;
        endforeach;

        return $return_arr;
    }


    function get_tab_code( $files, $type ){
      $files_locations = array();
      $tab = '<div class="my-5">';

      /* tab title start */
      $tab .= '<ul class="nav nav-pills" id="pills-tab" role="tablist">';
      foreach( $files as $key=> $value){
          $class_name = ( 0 === $key )? 'active': '';
          $tab .= '<li class="nav-item">'; 
          $tab .= '<a class="nav-link rounded-0 '.$class_name.'" id="pills-home-tab" data-toggle="pill" href="#tab-'.$key.'" role="tab" aria-controls="pills-home" aria-selected="true">'; 
          $tab .= $value['name'];
          $tab .= '</a>';
          $tab .= '</li>'; 
      }
      $tab .= '</ul>'; 
      /* tab title end */

      $tab .= '<div class="tab-content" id="pills-tabContent">';
      if('scss === $type') $type = 'css';
      foreach( $files as $key=> $value){
        $class_name = ( 0 === $key )? 'active': '';
        $tab .= '<div class="tab-pane show '.$class_name.'" id="tab-'.$key.'" role="tabpanel" aria-labelledby="pills-home-tab">';
           $tab .=  '<pre><code class="language-'.$type.'">';
           $tab .=  file_get_contents( $value['location'] );
           $tab .=  '</code></pre>';
        $tab .= '</div>';
        array_push( $files_locations, $value['location'] );
      }
      $tab .= '</div>'; 

      $tab .= '</div>'; 

      echo $tab;
      echo "<script> var data=".json_encode($files_locations)."</script>";
    }
    

    function get_single_code( $file, $type){
        if( 'php' === $type) $type = 'html';
        $print_data = '<div class="wrapper">';
        if( is_file( $file['location']) ){
           $print_data .= '<h5>'.$file['name'].'</h5>';
           $print_data .=  '<pre><code class="language-'.$type.'">';
           $print_data .=  htmlspecialchars(file_get_contents( $file['location'], true ));
           $print_data .=  '</code></pre>';
        }else{
           // echo $file['location'].'file not exist';
        }
        echo $print_data .='</div>';
    }

    
    function get_files_paths($dir, &$lists, $type){
        
        if(!is_dir($dir)){
            $return_data = array();

            $paths = explode('/',$dir);
            $file_name = array_pop($paths);
            $new_dir = implode('/', $paths);
            
            if('scss' === $type){
                $return_data['location'] = $new_dir.'/_'.$file_name.'.'.$type; 
                $return_data['name'] = '_'.$file_name.'.'.$type;
            }else{
                $return_data['location'] = $new_dir.'/'.$file_name.'.'.$type; 
                $return_data['name'] = $file_name.'.'.$type;
            }
            $lists = $return_data;
            return $lists;
        }

        $ffs = scandir($dir);
        unset($ffs[array_search('.', $ffs, true)]);
        unset($ffs[array_search('..', $ffs, true)]);

        if (count($ffs) < 1)
            return;
    
        foreach($ffs as $ff){
            if( preg_match('/(\.php|\.js|\.scss)$/i', $ff) ){
                $lists[] = array("location"=>$dir.'/'.$ff, "name"=>$ff);
            }
            if(is_dir($dir.'/'.$ff)) {
                get_files_paths($dir.'/'.$ff, $lists);
            }
        }
    }


    function get_code( $path, $type ){
        $files = array();
        get_files_paths( $path, $files, $type);

        if( count($files) == count($files, COUNT_RECURSIVE) ){
            get_single_code( $files, $type );
        }else{
            get_tab_code( $files, $type );
        }
    }


    function get_check_box_template( $data_val, $name, $counter ){
        return "
            <div class='form-group mb-1 form-check'>
                <input type='checkbox' name=".$data_val." class='form-check-input' id='data-".$counter."'>
                <label class='form-check-label' for='data-".$counter."'>".$name."</label>
            </div>
        ";
    }

    
    function get_downloadable_file_lists( $files, $file_name ){
        $template = '<form id="download-file" data-file-name="'.$file_name.'">';
        $counter = 0;

        foreach( $files as $extension => $file){
            $path = $file['path'];
            $base_url = $file['base_url'];
            $file = array();

            if( is_dir($path) ){
                $ffs = scandir($path);
                unset($ffs[array_search('.', $ffs, true)]);
                unset($ffs[array_search('..', $ffs, true)]);
                foreach( $ffs as $file_name ){
                    $template .=  get_check_box_template('../'.$path.'/'.$file_name, $file_name, $counter++ );
                };
            }else{
                $file_info = get_files_paths( $path, $files, $extension);
                if( file_exists( $file_info['location'] ) ){
                    $template .= get_check_box_template('../'.$file_info['location'], $file_info['name'] , $counter++ );
                }
            }
        }
        return $template .= '<button class="mt-3 btn rounded-0 frame-btn-color btn-sm" disabled>Download file(s) <i class="ml-1 far fa-arrow-alt-circle-down"></i> </button> </form>';
        
    }
