import {config, updateConfig} from './config.js';

class designSystemUI{

    constructor(){
        this.toggleSideBar();
        this.copyToClipboard();
        this.downloadFiles();
        this.toggleMenu();
        this.downloadFile();
    }

    downloadFile(){
        
        var request = new XMLHttpRequest();
        request.open('POST', 'http://localhost/design-system/api/json/download', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.responseType = 'blob';

        var disposition = request.getResponseHeader('content-disposition');
        var matches = /"([^"]*)"/.exec(disposition);
        var filename = (matches != null && matches[1] ? matches[1] : 'file.zip');

        // The actual download
        request.onload = function() {
            var blob = new Blob([request.response], { type: 'octet/stream' });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
    
            document.body.appendChild(link);
    
            link.click();
    
            document.body.removeChild(link);
        }

        request.send();


        // $.get( 'http://localhost/design-system/api/json/download' ).then(function( response ){
        //     console.log( response );
        // });
        
    }

    toggleMenu(){
        const selector = 'ul.menu > li > a',
              className = 'open';

            $('ul.menu > li').eq(config().selectedChild).find('ul')
                .slideDown()
                .parent()
                .addClass(className);

            $(selector).on( 'click', e=>{
                e.preventDefault();
                updateConfig('selectedChild', $(e.target).attr('data-index') );
                
                $(e.target)
                    .next()
                    .slideDown()
                    .parent()
                    .addClass(className)
                    .siblings()
                    .removeClass(className)
                    .find('ul')
                    .slideUp();
        })
    }


    toggleSideBar(){
        if(config().isSideMenuOpened)
            $('body').removeClass("side-menu-close");
        else
            $('body').addClass("side-menu-close");

        $('.back-arrow a').on('click', e=>{
            e.preventDefault();
            updateConfig('isSideMenuOpened', !config().isSideMenuOpened );
            $('body').toggleClass("side-menu-close");
        })
    }

    downloadFiles(){
        $(document).on('click', '.download-files', e => {
            $.ajax({
                url: 'function.php',
                type: 'POST',
                data: { data : {function : 'download_files', files: data } },
                dataType: 'json',
                success: data =>{
                    console.log(data);
                },
                error: error=>{
                    console.log(error);
                }
            })
            
        })
        
    }

    copyToClipboard() {
        const pres = $("pre");

        if(pres !== null){
            pres.each( function(i, ele){
                $(ele).prepend(
                    `<div class="copy" style="cursor:pointer;">copy</div>`
                )
            })
        }

        // create clipboard for every copy element
        const clipboard = new ClipboardJS('.copy', {
            target: (trigger) => {
                return trigger.nextElementSibling;
            }
        });

        // do stuff when copy is clicked
        clipboard.on('success', (event) => {
            $(event.trigger).text('copied!');
            setTimeout(() => {
                event.clearSelection();
                $(event.trigger).text('copy');
            }, 2000);
        });
    }
    
}

$(document).ready(()=>{
    new designSystemUI();
})