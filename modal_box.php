
<div id="get-code" class="modal bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg m-0">
        <div class="modal-content rounded-0 border-0">
        
            
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>

                <div class="row vh-100">
                    
                    <div class="col-10 p-5">
                        <?php 
                            get_code($_GET['cat'].'/'.$_GET['page'], 'php');
                            get_code('assets/src/scss/'.$_GET['cat'].'/'.$_GET['page'], 'scss');
                            get_code('assets/src/js/'.$_GET['cat'].'/'.$_GET['page'], 'js');
                        ?>
                    </div>

                    <div class="col-2 py-5 bg-light download-block">
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
        