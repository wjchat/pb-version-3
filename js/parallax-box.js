//this code lets you move images along the y axis at different rates as you scroll up and down the page
//give this function to body onscroll


let containers = document.getElementsByClassName('view-space');
// Give class view-space to all containers


function moveItems(){
    
    for(i = 0; i < containers.length; i ++){
        let difference = containers[i].getBoundingClientRect().top - window.innerHeight;
        
        if (difference < 0 && !(difference < window.innerHeight - containers[i].innerHeight) ){
        //code only executes when your scroll position is within the container
            
        let images = containers[i].getElementsByTagName(
        'img');   
        //here it only targets nested images, but could target anything
         
            for (i = 0; i < images.length; i ++){
                
                let speed = images[i].getAttribute('scroll-speed');
                //assign scroll speed as an attribute to affected elements
                
                images[i].style.transform = `translate(0, ${difference * speed}px)`;
                
            };
        
        };
    };

    
};











