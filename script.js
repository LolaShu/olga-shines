const portfolio = {};

//show the scroll up button
portfolio.scrollUp = () => {
    const scrollBtn = document.getElementById("scroll-btn");    
    window.onscroll = function() { scrollFunction() };

    function scrollFunction (){
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            scrollBtn.style.display = "block";
        } else {
            scrollBtn.style.display = "none";
        }
    }

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    scrollBtn.addEventListener("click", () => {
        topFunction();
    });
}

portfolio.colorChange=()=>{
    
    document.addEventListener("scroll", changeColor);
    
    function changeColor(){

        const  scrollDistance = document.querySelector('header').offsetHeight;
        const bars = document.getElementById("nav-icon");
        const myNodelist = bars.querySelectorAll('span'); 

        if (document.body.scrollTop > scrollDistance || document.documentElement.scrollTop > scrollDistance) {

            document.querySelector("nav").classList.add('onMain');
            document.querySelector("nav").classList.remove('onHeader');

            for(let i=0; i<myNodelist.length; i++){
                myNodelist[i].style.background ='#FFCB9A';
            } 

        }else {

            document.querySelector("nav").classList.remove('onMain');
            document.querySelector("nav").classList.add('onHeader'); 

            for(let i=0; i<myNodelist.length; i++){
                myNodelist[i].style.background='rgba(255, 255, 255, 0.75)';
            } 

        } 
    }
}

portfolio.attachAnimationObservers = () => {
    const options = {
        root: null, //use the document's viewport as the container
        rootMargin: '0px', //% or px - offsets added to each side of the intersection 
        threshold: 0.2 //percentage of the target element which is visible
    }
    let callback = (entries) => {
        entries.forEach(entry => {
            //if entry (section) is visible - according with the params set in `options`, add `is-visible` class, else remove
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            } else {
                entry.target.classList.remove('is-visible');
            }
        });
    }
    //create intersection observer instance by calling its constructor and passing callback function to be run whenever a threshold is crossed in one direction or the other:
    let observer = new IntersectionObserver(callback, options);
    //attach observer to each section
    document.querySelectorAll('section').forEach(section => { observer.observe(section) });
}

// initializing
portfolio.init = () => {
    portfolio.scrollUp();
    //add navigation event listener
    const iconElement = document.getElementById('nav-icon');
    const navElement = document.querySelector('nav');  
    iconElement.addEventListener('click',function(){

        this.classList.toggle('open');    
        navElement.classList.toggle('show');
    });

    portfolio.colorChange(); 
    
    portfolio.attachAnimationObservers();
};

portfolio.init();

