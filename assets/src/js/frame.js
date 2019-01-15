/* vendor module import */
import  'prismjs';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tab';
import '@fortawesome/fontawesome-free/js/all';
import 'jquery.nicescroll';

/* Costom components */
import './frame/navResync';
import './frame/download';      
import './frame/nav';       

/* internal module import */
import {config, updateConfig} from './config';

class designSystemUI{
         
    constructor(){
        this.toggleSideBar();
        this.copyToClipboard();
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


$(document).ready( ()=>{
    new designSystemUI();
})