<?php
    require_once 'helpers/Navigation.php'; 
    use helper\Navigation ; 
    $navigation = new Navigation();  
    $navigation->get_nav();    
    ?>

    <!-- SIDE MENU -->
    <div class="md-side-menu">
        <a href="<?php get_home_url(); ?>" class="site-logo">
            <img src="<?php get_home_url()?>/assets/src/svg/logo.svg" class="float-left mt-1" alt="Logo">
            <h1 class="float-left">Design system</h1>
        </a>
        <div class="main-navigation">
        
            <?php echo $navigation->get_nav(); ?>
        </div>
    </div>