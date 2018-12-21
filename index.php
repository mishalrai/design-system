<?php
    require 'function.php';
    require 'header.php';
?>
    <!-- SIDE MENU -->
    <div class="md-side-menu">
        <a href="<?php get_home_url(); ?>" class="site-logo">
            <img src="<?php get_home_url()?>/assets/src/svg/logo.svg" class="float-left mt-1" alt="Logo">
            <h1 class="float-left">Design system</h1>
        </a>
        <div class="main-navigation">
            <?php nav_menu(); ?>
        </div>
    </div>

    
    <!-- DYNAMIC SECTION -->
    <div class="container-fluid px-4">
        <!-- Side menu toggler arrow -->
        <div class='back-arrow mt-3 mb-4'>
            <a href="<?php get_home_url(); ?>"><i class='fa fa-arrow-left'></i></a>   
        </div>
    </div>


    <?php
        if( !isset($_GET['page']) ){ 
            include('home-page.php');
        }else{  require 'single-page.php'; ?>
            <!-- Get code icon -->
            <a href="#" class="get-code" data-toggle="modal" data-target=".bd-example-modal-lg">
                <span class="text">Get code</span> <span class="code-icon"><i class="fas fa-code"></i></span>
            </a>
            
        <?php   
        }
    ?>


<?php
require 'footer.php';    