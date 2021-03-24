// const portfolio = {};



// //show the scroll up button
// portfolio.scrollUp = () => {
//     const scrollBtn = document.getElementById("scroll-btn");
//     //when the user scrolls down 50px from the top of the document, show the button
//     window.onscroll = function() { scrollFunction() };

//     function scrollFunction() {
//         if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//             scrollBtn.style.display = "block";
//         } else {
//             scrollBtn.style.display = "none";
//         }
//     }

//     function topFunction() {
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//     }

//     scrollBtn.addEventListener("click", () => {
//         topFunction();
//     });
// }

// portfolio.navigation=()=>{
//     const navElement = document.getElementById("navigation");
//     window.onscroll = function() { navShowUp() };

//     function navShowUp() {
//         if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
//             navElement.style.display = "block";
//         } else {
//             navElement.style.display = "none";
//         }
//     };    

// }



// document.querySelector("form").addEventListener("submit", handleSubmit);

// const handleSubmit = (e) => {
//   e.preventDefault()
//   let myForm = document.getElementById('contact-form');
//   let formData = new FormData(myForm)
//   fetch('/', {
//     method: 'POST',
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString()
//   }).then(() => console.log('Form successfully submitted')).catch((error) =>
//     alert(error))
// }


// // //||||| initialize |||||
// portfolio.init = () => {
    
// //     //add scroll event listener and functionality
    
//     portfolio.navigation();
//     portfolio.scrollUp();
// //     
// };

// portfolio.init();