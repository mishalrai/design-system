import toast from 'izitoast';
import {routes, _toast} from './constants';

class SideMenuToggle{
    
    constructor(){
        this.$selector = $('.back-arrow a');
        this.$body = $('body');
        this.className = 'side-menu-close';

        this.toggle();
    }

    toggle(){
        this.$selector.on('click', e=>{
            e.preventDefault();
            if( this.$body.hasClass(this.className) ){
                this.$body.removeClass(this.className); 
                this.handleRequest('show');
            }else{
                this.$body.addClass(this.className); 
                this.handleRequest('hide');
            }
        })
    }

    handleRequest( state ){
        $.ajax({
            url: routes.config,
            method: "POST",
            data: { name: 'is_menu_open', value: state },
            dataType: "json",
            success: res =>{
                if( 200 !== res.status){
                    toast.error(
                        _toast.makeParam({
                            message: res.message
                        })
                    );
                }
            },
            error: e =>{
                console.log(e);
            },
          });
    }

}

$(document).ready(()=>{
    new SideMenuToggle();
});