    
<?php
    $file = $_GET['cat'].'/'.$_GET['page'].'.php';

    if( file_exists($file) ){
        require_once  $_GET['cat'].'/'.$_GET['page'].'.php'; 
        require_once('modal_box.php');
    }else
        require_once('404.php')
       
?>





    

