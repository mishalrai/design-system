    
<?php
    $file = $_GET['cat'].'/'.$_GET['page'].'.php';

    if( file_exists($file) ){
        require_once($file); 
        require_once('template-parts/modal_box.php');
        ?>
            <!-- Get code icon -->
            <a href="#" class="get-code" data-toggle="modal" data-target=".bd-example-modal-lg">
                <span class="text">Get code</span> <span class="code-icon"><i class="fas fa-code"></i></span>
            </a>
        <?php
    }else
        require_once('404.php');
?>





    

