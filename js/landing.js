let container = document.querySelector('.container');

container.width = window.innerWidth
container.height = window.innerHeight

let icons = container.getElementsByTagName('img');
let iconArray = new Array();
let enter = document.querySelector('.enter').querySelector('h1');

const speed = .5;
const thresh = .2
const gravity = 0;


//calculates the dy which can be positve or negative and must maintain a speed threshold
function calculateDY() {
    let temDY = (Math.random() * (speed * 2)) - speed;
    if (temDY < 0) {
        temDY -= thresh;
    } else {
        temDY += thresh;
    }
    return temDY;
}

function calculateR() {
    let temR = (Math.random() * .2) - .1;
    if (temR < 0) {
        temR -= thresh;
    } else {
        temR += thresh;
    }
    return temR;
}

function Icon(svg) {
    this.svg = svg,
        this.x = (Math.random() * (container.width * 2)) - container.width - 100,
        this.y = Math.random() * (container.height - 100),
        this.dx = Math.random() * speed + thresh,
        this.dy = calculateDY()
    this.rotate = Math.random() * 360;
    this.dr = calculateR();;
}

function makeObjects() {
    for (i = 0; i < icons.length; i++) {
        let hold = new Icon(icons[i])
        hold.svg.style.left = hold.x + 'px';
        hold.svg.style.top = hold.y + 'px';
        iconArray.push(hold);
    }
    moveObjects();
}

function moveObjects() {

    for (i = 0; i < iconArray.length; i++) {
        let hold = iconArray[i];
        hold.x += hold.dx;
        hold.y += hold.dy;
        hold.dy += gravity;
        hold.svg.style.left = hold.x + 'px';
        hold.svg.style.top = hold.y + 'px';
        hold.rotate += hold.dr;
        hold.svg.style.transform = `rotate(${hold.rotate}deg)`;


        if (hold.x > window.innerWidth + 100 || hold.y < -200 || hold.y > window.innerHeight + 100) {
            //resets animation
            let number = Math.random() * 1;
            if (number < .333) {
                hold.x = -100
                hold.y = Math.random() * window.innerHeight - 100;
            } else if (number < .666) {
                hold.x = (Math.random() * window.innerWidth - 100);
                hold.y = window.innerHeight + 10;
            } else {
                hold.x = Math.random() * window.innerWidth - 100;
                hold.y = (Math.random() * -100) - 100;
            }

            hold.svg.style.left = hold.x;
            hold.svg.style.top = hold.y;
            hold.dx = Math.random() * speed + thresh;
            hold.dy = calculateDY();
        }
    }


    window.requestAnimationFrame(moveObjects);
}

function lineThru(thing) {
    thing.querySelector('.line').classList.add('draw-line');
}

function lineOut(thing) {
    thing.querySelector('.line').classList.remove('draw-line');
}

enter.onmouseover = function(){
    lineThru(enter);
}

enter.onmouseout = function(){
    lineOut(enter);
}
