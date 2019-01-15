import {config, updateConfig} from '../config';
import {events} from './constants';

class Nav{
    
    constructor(){
        this.selector = 'ul.menu > li';
        this.className = 'open';

        this.toggleLastMenu();
        this.updateLastClickEle();
        this.toggleMenu(); 

        $(document).on( events.menuUpdate, ()=>{
            this.toggleLastMenu();
        });
    }

    toggleLastMenu(){
        $(document)
            .find(this.selector)
            .eq(config().selectedChild).find('ul')
            .slideDown()
            .parent()
            .addClass(this.className);
    }

    updateLastClickEle(){
        $(document).on( 'click', `${this.selector} ul a`, e=>{
            e.preventDefault();
            let $ele = $(e.target),
                redirectLink = $ele.attr('href'),
                eleIndex = $ele.parents('ul').prev().attr('data-index');   
                updateConfig('selectedChild', eleIndex );
                window.location = redirectLink;
        });
    }

    toggleMenu(){
        $(document).on('click', `${this.selector} > a`, e=>{
            e.preventDefault();
            $(e.target)
                .next()
                .slideToggle()
                .parent()
                .addClass(this.className)
                .siblings()
                .removeClass(this.className)
                .find('ul')
                .slideUp();
        })
    }


}

$(document).ready( ()=>{
    new Nav();
})