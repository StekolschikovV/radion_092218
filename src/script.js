
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
        if(document.body.clientWidth > 995){
            this.menu.classList.add('show')
        }
    },
    hide(){
        this.menu.classList.remove('show')
    }

}

var FilmList = {

    btn: document.querySelector('#filmListBtn'),
    list: document.querySelector('#filmList'),
    status: false,

    start(){
        this.event();
    },

    event(){
        this.btn.addEventListener('click', () => {
            this.status = !this.status;
            this.showHide();
        })
    },

    showHide(){
        if(document.body.clientWidth > 995) {
            this.list.classList.toggle('show');
            this.btn.classList.toggle('show');
        } else {
            this.list.classList.remove('show');
            this.btn.classList.remove('show');
        }
    }

};

document.addEventListener("DOMContentLoaded", function () {
    Search.start();
    FilmList.start();
});