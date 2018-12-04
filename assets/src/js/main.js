import {config, updateConfig} from './config.js';
import download from './download.js';

class designSystemUI{

    constructor(){
        this.toggleSideBar();
        this.copyToClipboard();
        this.downloadFiles();
        this.toggleMenu();
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
    new download();
})