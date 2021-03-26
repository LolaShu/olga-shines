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
};

portfolio.init();

