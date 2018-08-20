<?php

    function get_home_url(){
        echo "/ds";
    };


    function nav_menu(){
        $folders = ['components', 'layouts'];
        
        $menu = "<ul class='menu'>";
        foreach( $folders as $folder){
            if( sizeof(scandir($folder)) > 2){
                $menu .= "<li>".$folder;
                    if(is_dir($folder)){
                        $menu .= "<ul>";
                            foreach( scandir($folder) as $file_name){
                                if (!in_array($file_name, array(".",".."))){
                                    $menu .= "<li><a href='?cat=".$folder."&page=".basename($file_name,'.php')."'>".str_replace("-", " ",basename($file_name, '.php') )."</a></li>";
                                } 
                            }
                        $menu .= "</ul>";
                    }
                $menu .= "</li>";
            }
        }
        $menu .= '</ul>';
        echo $menu;
    };

    
    function get_tab_code( $files, $type ){
      $tab = '<div class="my-5">';

      /* tab title start */
      $tab .= '<ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">';
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
      }
      $tab .= '</div>'; 

      $tab .= '</div>'; 

      echo $tab;
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
        echo $print_data;
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

