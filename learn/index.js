gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let mm = gsap.matchMedia();


var body = document.querySelector("#rk");
var info = document.querySelector(".member-info");

const nav = document.querySelector(".mobile_nav");
const nav_icon = document.querySelector(".ope");
const load = document.querySelector(".loading");
const inner_circle = document.querySelector(".inner_circle");
const mobile_nav = document.querySelector(".mobile");


var h_body = body.offsetHeight;
// document.querySelector(".member-pfp").style.minHeight = h_body + "px";

load.style.height = h_body + "px";

function nav_open() {
    nav.style.transform = "scaleX(1)";
    nav_icon.style.display = "none";
    mobile_nav.style.justifyContent = "flex-end";
}
function nav_close() {
    nav.style.transform = "scaleX(0)"
    nav_icon.style.display = "inline";
    mobile_nav.style.justifyContent = "center";
}

let list = document.querySelector(".cat_list");
let learn = document.querySelector(".ca");
let learnm = document.querySelector(".cam");
let listm = document.querySelector(".cat_list_m");
let learn_count = 0;
learn.addEventListener("mouseenter", function() {
    list.style.transform = "scaleY(1)";
})
learn.addEventListener("mouseleave", function() {
    list.style.transform = "scaleY(0)";
})


learnm.addEventListener("click", function() {
    if (learn_count % 2 == 0) {
        listm.style.transform = "scaleY(1)";
    }
    else {
        listm.style.transform = "scaleY(0)";
    }
    learn_count++;
})





var loading = gsap.timeline()

loading.set(".loading", {
    display: "flex"
})
.to(".blocks", {
    scale : 1.1,
    duration: 0.7,
    rotate : "180deg",
    width : "170px",
    height : "170px",
})
.to(".blocks",{
    scale : 1,
    duration: 0.7,
    rotate : "360deg",
    width: "150px",
    height: "150px", 
})
.to(".load", {
    width: "100%",
    ease: "expo.in",
    duration: 1.4
}, "-=1.6")
.to(".loading", {
    opacity: 0,
    duration: 0.3,
}, "-=0.2")
.set(".loading", {
    display: "none"
})
.fromTo("#header", {
    scaleY:0
}, {
    scaleY:1,
    duration: 0.5
})





// ? ------------------------- section block part -------------------------

let eles = document.querySelectorAll(".section-block");
function sec(num)
{   
    if (num == 0)
    {
        document.querySelector(".text-based-heading").style.backgroundColor = "#ffffff44";
        document.querySelector(".video-based-heading").style.backgroundColor = "transparent";
        eles[0].style.display = "block";
        eles[1].style.display = "none";
    }
    else
    {
        document.querySelector(".text-based-heading").style.backgroundColor = "transparent";
        document.querySelector(".video-based-heading").style.backgroundColor = "#ffffff44";
        eles[0].style.display = "none";
        eles[1].style.display = "block";
    }
}




//? ------------------------- page part -------------------------


let pages = document.querySelectorAll(".page");
let page_link = document.querySelectorAll(".top-total a");
let page_inner_link = document.querySelectorAll(".page-content > ul");
let active = 0;
function page(num)
{  

    pages[active].classList.remove("active")
    page_link[active].classList.remove("active")
    page_inner_link[active].classList.remove("active")

    pages[num].classList.add("active")
    page_link[num].classList.add("active")
    page_inner_link[num].classList.add("active")

    active = num
}