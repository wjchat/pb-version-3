const body = document.querySelector('body');
const channels = document.getElementsByClassName('channel');
const projects = document.getElementsByTagName('li');
window.onload = function(){
    TweenMax.to(body, .2, {
        opacity: 1,
    })
}
const theTeam = document.querySelector('#theteam');
let img = document.querySelector('.prettyboi');
const duration1 = .3;
 function moveImage(e) {
    TweenMax.to(img, duration1, {
      css: {
        left: (e.pageX / 20) - (img.width / 20),
        top: (e.pageY / 20) - (img.height / 20),
      }
    });
}

function redirect(each){
    let route = '/' + each.id + '.html';
    TweenMax.to(body, duration1, {
        opacity: 0,
        onComplete: function(){
            window.location = route;
        },
    })
}
for(let each of channels){
    each.onclick = function(){
        redirect(each);
    }
}
for(let each of projects){
        each.onmouseenter = function(){
        TweenMax.to(each.querySelector('h1'), .2, {
            opacity: 1,
            ease: 'linear',
        })
        TweenMax.to(each.querySelector('img'), .2, {
            scale: 1.3,
            filter: 'blur(10px)',
            ease: 'linear',
        })        
    }
    each.onmouseleave = function(){
        TweenMax.to(each.querySelector('h1'), .2, {
            opacity: 0,
            ease: 'linear',
        })
        TweenMax.to(each.querySelector('img'), .2, {
            scale: 1.1,
            filter: 'blur(0px)',
            ease: 'linear',
        })        
    }
    
}
theTeam.onclick = function(){
    redirect(theTeam);
}
body.onmousemove = function(e){
    moveImage(e);
}