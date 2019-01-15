
import toast from 'izitoast';
import {routes, events, _toast} from './constants';

class NavResync{

    constructor(){
        this.btnSync = '.btn-sync';
        this.$btnSync = $('.btn-sync');
        this.renderEle = '.main-navigation';

        /* icons */
        this.done = '<i class="fas fa-check"></i>';
        this.syncing = '<i class="fas fa-sync fa-spin"></i>';
        this.sync = '<i class="fas fa-sync"></i>';

        this.handleClick();
    }

    getCurrentPage(){
        let currentPage = location.href.split("page=")[1];
        return currentPage ? currentPage : '';
    }

    handleClick(){
        $(this.btnSync).on( 'click', e=>{
            e.preventDefault();
            this.handleRequest();
        });
    }

    updateDOM( $template ){
        $(this.renderEle).html( $template );
        $(document).trigger(events.menuUpdate);
    }

    handleRequest(){
        

        $.ajax({
            url: routes.navigation( this.getCurrentPage() ),
            method: "GET",
            dataType: "json",
            beforeSend: ()=>{
                this.$btnSync.find('.icon').html(this.syncing); 
            },
            success: res =>{
                if( 200 === res.status){
                    this.updateDOM( res.data );
                    setTimeout(()=>{
                        this.$btnSync.find('.icon').html(this.done);
                        toast.success(
                            _toast.makeParam({
                                title: res.message
                            })
                        );

                    },500 )
                    return;
                }
            },
            error: e =>{
                toast.error(
                    _toast.makeParam({
                        message: res.message
                    })
                );
            },
            complete : ()=>{
                setTimeout( ()=>{
                    this.$btnSync.find('.icon').html(this.sync);
                },1000)
            }
          });
    }

}

$(document).ready( ()=>{
    new NavResync();
})