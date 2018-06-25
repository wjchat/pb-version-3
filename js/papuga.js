let innerHeight = window.innerHeight
let innerWidth = window.innerWidth


let logo = document.querySelector('#bm');
let played = false;


function animateLogo(){
    
    if(played === false){
            let animation = bodymovin.loadAnimation({
            container: logo,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'js/data.json'
        })
        
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