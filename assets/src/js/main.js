class designSystemUI{
    constructor(){
        this.toggleSideMenu();
    }

    toggleSideMenu(){
        $('.back-arrow a').on('click', e=>{
            e.preventDefault();
            $('body').toggleClass("side-menu-close");
        })
    }

    copyToClipboard() {
        var copyText = document.getElementById("myInput");
        copyText.select();
        document.execCommand("copy");
        alert("Copied the text: " + copyText.value);
    }
}

$(document).ready(()=>{
    new designSystemUI();
})