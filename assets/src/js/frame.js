/* vendor module import */
import  'prismjs';
import 'bootstrap/js/dist/modal';
import 'bootstrap/js/dist/tab';
import '@fortawesome/fontawesome-free/js/all';
import 'jquery.nicescroll';

/* Custom components */
import './frame/NavResync';
import './frame/Download';      
import './frame/Nav';       
import './frame/SideMenuToggle';       

class designSystemUI{
         
    constructor(){
        this.copyToClipboard();
        this.niceScroll();
        this.modalBox();
        this.openModalBox();
    }

    openModalBox(){
        let selector = location.hash ;
        if( selector.length){
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
        $(document).find('.main-navigation').niceScroll({
            cursorborderradius: 0,
            cursorcolor: '#5b628e',
            cursorborder: 'none'
        });
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