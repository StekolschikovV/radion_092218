
var Search = {

    input: document.querySelector('#search-input'),
    menu: document.querySelector('.searchMenu'),
    navbar : document.querySelector('.navbar '),

    start(){
        this.event();
    },

    event(){
        this.input.addEventListener('input',  (evt) => {
            if(evt.target.value.length > 2){
                this.show();
            } else {
                this.hide();
            }
        });
        this.navbar .addEventListener('mouseleave', (evt) => {
            this.hide();
        });
        this.menu.addEventListener('mouseleave', (evt) => {
            this.hide();
        });
    },

    show(){
        this.menu.classList.add('show')
    },
    hide(){
        this.menu.classList.remove('show')
    }

}

document.addEventListener("DOMContentLoaded", function () {
    Search.start();
});