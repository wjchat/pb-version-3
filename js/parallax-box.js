//this code lets you move images along the y axis at different rates as you scroll up and down the page
//give this function to body onscroll
//provides enter animation as well
const body = document.querySelector('body'); 
const home = document.querySelector('#home');
let images = document.getElementsByTagName('img');
let views = document.getElementsByClassName('view-space');
let grown = false;

const height = window.innerHeight ;

function moveItems(item) {

    let difference = item.getBoundingClientRect().top - height;

    let speed = item.getAttribute('scroll-speed');
    //assign scroll speed as an attribute to affected elements

    item.style.transform = `translate(0, ${difference * speed}px)`;
};

function test() {

    for (i = 0; i < images.length; i++) {
        let current = images[i];
        
        if(current.classList.contains('move')){
            
            if (current.getBoundingClientRect().top < height - 50 && current.getBoundingClientRect().bottom > 0) {
                moveItems(current);

                if (!(current.classList.contains('show'))) {
                    current.classList.add('show');
                    growItems(current);
                }
            }
        }else if(current.classList.contains('bigPic')){
            fadeBig(current);
        }
        
    }
}


function setItems() {
    for (i = 0; i < images.length; i++) {
    
        let current = images[i];
        if(current.classList.contains('move')){
            
            let width = current.offsetWidth;
            let left = current.offsetLeft;
            let top = current.offsetTop;

            current.style.top = (top * 1.05) + 'px';
            current.style.left = (left * 1.025) + 'px';
            current.style.width = (width * .95) + 'px';
        }
    }
}

function growItems(current) {

    let width = current.offsetWidth;
    let left = current.offsetLeft;
    let top = current.offsetTop;

//    current.style.top = (top / 1.05) + 'px';
    current.style.left = (left / 1.025) + 'px';
    current.style.width = (width / .95) + 'px';

}

function fadeBig(current){
    let top = current.getBoundingClientRect().top;
    current.style.opacity = ((height - top) / 10)/ 50;
}

body.onload = function () {
    TweenMax.to(body, .3, {
        opacity: 1,
        onComplete: colorPalette,
    })
    setItems();
}
home.onclick = function(){
    TweenMax.to(body, .3, {
        opacity: 0,
        onComplete: function(){
            window.location = '/home.html';
        }
    })
}

//todo- remove grown class on screen resize
