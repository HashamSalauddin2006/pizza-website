let nav = document.querySelector (".navbar")
window.onscroll = function(){
    if (document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}
// let nav = document.querySelector(".navbar");

// window.onscroll = function() {
//     // Use scrollY instead of scrollTop
//     if (window.scrollY > 50) {
//         nav.classList.add("header-scrolled");
//     } else {
//         nav.classList.remove("header-scrolled");
//     }
// };
// let nav = document.querySelector(".navbar");

// window.onscroll = function() {
//   if (window.scrollY > 50) {
//     nav.classList.add("header-scrolled");
//   } else {
//     nav.classList.remove("header-scrolled");
//   }
// };

