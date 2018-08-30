class designSystemUI{

    constructor(){
        this.toggleSideMenu();
        this.copyToClipboard();
    }

    toggleSideMenu(){
        $('.back-arrow a').on('click', e=>{
            e.preventDefault();
            $('body').toggleClass("side-menu-close");
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