/* vendor module import */
import  'prismjs';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tab';
import '@fortawesome/fontawesome-free/js/all';
import 'jquery.nicescroll';

/* internal module import */
import {config, updateConfig} from './config';
import download from './download';    

class designSystemUI{
         
    constructor(){
        this.toggleSideBar();
        this.copyToClipboard();
        this.downloadFiles();
        this.toggleMenu();
        this.niceScroll();
        this.modalBox();
        this.openModalBox();
    }

    openModalBox(){
        let selector = location.hash ;
        if( selector.length){
            console.log('if');
            $(selector).modal('show');
        }
    }   

    modalBox(){
        $('#get-code').on('show.bs.modal', function (e) {
            location.hash = '#get-code';
        })
        
        $('#get-code').on('hide.bs.modal', function (e) {
            location.hash = '';
        })
    }

    niceScroll(){
        $('.main-navigation').niceScroll({
            cursorborderradius: 0,
            cursorcolor: '#5b628e',
            cursorborder: 'none'
        });
    }

    toggleMenu(){
        const selector = 'ul.menu > li > a',
              className = 'open';

            $('ul.menu > li').eq(config().selectedChild).find('ul')
                .slideDown()
                .parent()
                .addClass(className);
            
            $('ul.menu li ul a').on( 'click', e=>{
                e.preventDefault();

                let $ele = $(e.target),
                    redirectLink = $ele.attr('href'),
                    eleIndex = $ele.parents('ul').prev().attr('data-index');   
                    updateConfig('selectedChild', eleIndex );
                    window.location =redirectLink;
            })

            $(selector).on( 'click', e=>{
                e.preventDefault();
                // updateConfig('selectedChild', $(e.target).attr('data-index') );
                
                $(e.target)
                    .next()
                    .slideToggle()
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
                $(ele).wrap('<div class="pre-wrapper"></div>').before(
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