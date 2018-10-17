let innerHeight = window.innerHeight
let innerWidth = window.innerWidth
const papBody = document.querySelector('#papBody');
const back = document.querySelector('t');
let logo = document.querySelector('#bm');
let played = false;
let palette = document.getElementsByClassName('palette');
let logoContainer = document.querySelector('.logo-container');
let background = document.querySelector('.img-container');
let imagesPap = document.getElementsByClassName('display');

//function is fired in parallax-box.js
function animatePalette() {
    let animation = bodymovin.loadAnimation({
        container: palette,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'js/color.json'
    })
};

function animateLogo() {

    if (played === false) {

        background.classList.add('fade-in');


        let animation = bodymovin.loadAnimation({
            container: logo,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'js/bird.json'
        })

        setTimeout(function () {
            logoContainer.classList.add('color-in');
            background.classList.remove('fade-in');
        }, 1700);

        played = true;

    }



};

function scrollFunction() {
    if (played === false) {

        let logoPos = logo.getBoundingClientRect();
        if (logoPos.top < innerHeight - 100) {
            animateLogo();
        }

    }

    for (i = 0; i < imagesPap.length; i++) {
        let current = imagesPap[i];

        if (current.getBoundingClientRect().top < innerHeight && current.getBoundingClientRect().bottom > 0) {
            current.classList.add('show');
        }
    }
}

function colorPalette() {
    for (i = 0; i < palette.length; i++) {
        palette[i].classList.add('color-in');
    }

};
 
papBody.onscroll = function(){
    scrollFunction();
}
papBody.onload = function () {
    TweenMax.to(papBody, .3, {
        opacity: 1,
        onComplete: colorPalette,
    })
}

back.onclick = function(){
    TweenMax.to(papBody, .3, {
        opacity: 0,
        onComplete: function(){
            window.location = 'home.html';
        }
    })
}

