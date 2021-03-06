<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Master Design</title>  
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="stylesheet" href="assets/build/css/vendors.css">
        <link rel="stylesheet" href="assets/build/css/main.css">
        <script defer src="assets/src/js/vendor/js.cookie.min.js"></script>
        <script>
            var LOCAL = {
                "base_url" : "<?php echo get_base_url(); ?>"
            };
        </script>
    </head>
    
    <?php
        $is_menu_open = $config->get()['is_menu_open'];
        $class_name = $is_menu_open ==='hide' ? 'side-menu-close' : '';
    ?>

    <body class="<?php echo $class_name; ?>">
