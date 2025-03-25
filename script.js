let mobileNav = document.querySelector(".res-nav");
let cross = document.querySelector(".cross");
let menu = document.querySelector(".menu");
menu.addEventListener("click",()=>{
    mobileNav.classList.remove("hidden")
})
cross.addEventListener("click",()=>{
    mobileNav.classList.add("hidden")
})