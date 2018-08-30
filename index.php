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

        <?php
            if( !isset($_GET['page']) ){ ?>
                <h1>Home page</h1>   
                <pre>
                    <code class="language-css rounded-0">
                        html {font-size: 16px; }
                    </code>
                </pre>   
            <?php
            }else{
                require 'single-page.php';
            }
        ?>
    <div>


<?php
require 'footer.php';    