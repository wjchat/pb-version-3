const body = document.querySelector('body');
const app = document.querySelector('#app');
const back = document.querySelector('#home')


back.onclick = function(){
    TweenMax.to(body, .3, {
        opacity: 0,
        onComplete: function(){
            window.location = 'home.html';
        }
    })
}