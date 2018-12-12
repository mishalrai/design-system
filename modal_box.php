<a href="#" class="get-code" data-toggle="modal" data-target=".bd-example-modal-lg">
    Get code <span><i class="fas fa-code"></i></span>
</a>

<div class="modal bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content rounded-0 border-0">
            
            <div class="modal-header p-4">
                <h5 class="modal-title" id="exampleModalLabel">Let's Resuse CODE</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
                <div class="row">
                    
                    <div class="col-10 border-right py-4">
                        <?php 
                            get_code($_GET['cat'].'/'.$_GET['page'], 'php');
                            get_code('assets/src/scss/'.$_GET['cat'].'/'.$_GET['page'], 'scss');
                            get_code('assets/src/js/'.$_GET['cat'].'/'.$_GET['page'], 'js');
                        ?>
                    </div>

                    <div class="col-2 py-4">
                        <div class="side-bar download-section">
                            <h5>Download File(s)</h5>
                            <?php 
                            $files_with_extensions = array(
                                'php' => array(
                                            'path' => $_GET['cat'].'/'.$_GET['page'],
                                            'base_url' => $_GET['cat'].'/'
                                        ),
                                'scss' => array(
                                            'path' => 'assets/src/scss/'.$_GET['cat'].'/'.$_GET['page'],
                                            'base_url' => 'assets/src/scss/'.$_GET['cat'].'/'
                                    ),
                                'js' => array(
                                    'path' => 'assets/src/js/'.$_GET['cat'].'/'.$_GET['page'],
                                    'base_url' => 'assets/src/js/'.$_GET['cat'].'/'
                                ));

                                get_downloadable_file_lists($files_with_extensions, $_GET['page']);
                            ?>
                        </div>
                    </div>
                
                </div>
            </div>

        </div>
    </div>
</div>
        