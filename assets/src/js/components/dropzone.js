import Dropzone from 'dropzone/dist/dropzone-amd-module';  

export default class customizeDropzone{
    
    constructor(){  
        this.ele = '#dropzone';
        if( !$(this.ele).length){ 
            console.log('Target Element Not Found');
            return false;
        };
        
        this.dropzone;
        this.config =  {
            url : "http://18.220.74.75:1337/media",
            method : 'post',
            acceptedFiles : '.jpeg, .png, .gif',
            previewsContainer :  '#tpl',
            init : () => this.init() 
        };
        this.makeInstance();
        
    }

    makeInstance(){
        this.dropzone = new Dropzone( this.ele, this.config ); 
    }

    init(){
        $(this.ele).removeAttr('style');
    }


}