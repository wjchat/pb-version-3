let innerHeight = window.innerHeight
let innerWidth = window.innerWidth


let logo = document.querySelector('#bm');
let played = false;
let palette = document.getElementsByClassName('palette');
let logoContainer = document.querySelector('.logo-container');
let background = document.querySelector('.img-container');
console.log(background);

function animatePalette(){
    
    let animation = bodymovin.loadAnimation({
        container: palette,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'js/color.json'
    })
};

function animateLogo(){
    
    if(played === false){
        
        background.classList.add('fade-in');
        
           
            let animation = bodymovin.loadAnimation({
            container: logo,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'js/bird.json'
        })
            
        setTimeout(function(){
            logoContainer.classList.add('color-in');
            background.classList.remove('fade-in');
        }, 1700);   
        
        played = true;  
        
    }
    

    
};

function scrollFunction(){
    if (played === false){
        
        let logoPos = logo.getBoundingClientRect();     
        if (logoPos.top < innerHeight){
            animateLogo();
        }
    }
}

function colorPalette(){
    for (i = 0; i < palette.length; i++){
        palette[i].classList.add('color-in');
    }
};

colorPalette(); 

