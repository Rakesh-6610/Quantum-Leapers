gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis()

lenis.on('scroll', (e) => {
//   console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let mm = gsap.matchMedia();




var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });










var h_hero = document.querySelector("#hero");
var body = document.querySelector("#rk");

const nav = document.querySelector(".mobile_nav");
const nav_icon = document.querySelector(".ope");
const load = document.querySelector(".loading");
const inner_circle = document.querySelector(".inner_circle");
const mobile_nav = document.querySelector(".mobile");



var h_height = h_hero.offsetHeight;
var h_body = body.offsetHeight;

load.style.height = h_body + "px";

function nav_open() {
    nav.style.transform = "translateX(0%)";
    nav_icon.style.display = "none";
    mobile_nav.style.justifyContent = "flex-end";
}
function nav_close() {
    nav.style.transform = "translateX(-100%)"
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
    console.log(learn_count)
})






function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function rain(){
    var rains = document.querySelectorAll(".rain");
    var raindrop = rains[Math.floor(Math.random() * 35)]
    gsap.set(raindrop, {
        opacity: 1
    })
    gsap.to(raindrop, {
        y: h_height + "px",
        duration: 0.8, //! controls how much rain can drop in a single second
        ease: "ease.in"
    })
    gsap.set(raindrop, {
        y: 0,
    })
    sleep(0).then(() => {rain()});
}
rain()



function hero_num(ele, per) {
    let startingValue = 0,
        endingValue = per,
        speed = 8400;
    let progress = setInterval(() => {
        startingValue++
        if (startingValue == endingValue) {
            clearInterval(progress)
        }
        ele.innerHTML = startingValue
    }, speed)
    ele.classList.remove("her0_num");
}




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
    // delay: 0.2
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


const myText = new SplitType(".section-heading")
const myText2 = new SplitType(".item-name", {charClass : "learn_char"})
const myText3 = new SplitType(".project-h2", {charClass : "pro_h2"})
var thome = gsap.timeline()


thome.to(".anib", {
    width:6 + "px",
    duration:1,
    delay:1.2,
    ease : "expo.in"
})
.to(".btn_block", {
    width: 0,
    duration: 1,
    ease : "expo.in"
})
// mm.add("(max-width: 10000px)", () => {
//     thome.to(".img_bg", {
//         scale: 2,
//         duration: 1
//     }, "-=1")
// })
// mm.add("(max-width: 1600px)", () => {
//     thome.to(".img_bg", {
//         scale: 1.6,
//     }, "-=1") 
// })
// mm.add("(max-width: 900px)", () => {
//     thome.to(".img_bg", {
//         scale: 1.4,
//         duration: 1
//     }, "-=1")
// })
mm.add("(max-width: 490px)", () => {
    thome.to(".anib", {
        width: 0,
        duration: 0.2
    }, "-=1")
})
mm.add("(max-width: 450px)", () => {
    thome.to(".img_bg", {
        scale: 1.1,
        duration: 1
    }, "-=1")
})









gsap.to(".char", {
    y:0,
    stagger: 0.02,
    delay: 0.2,
    duration: 0.4,
    scrollTrigger: ".section-heading"
})
gsap.to(".learn_char", {
    y:0,
    stagger: 0.02,
    delay: 0.2,
    duration: 0.4,
    scrollTrigger: ".item-name"
})
gsap.to(".pro_h2", {
    y:0,
    stagger: 0.02,
    delay: 0.2,
    duration: 0.4,
    scrollTrigger: ".project-h2"
})





gsap.utils.toArray('.inner').forEach(inner=> {
    gsap.fromTo(inner,{
        width:0
    },{
        width:'30%',
        duration:2,
        scrollTrigger:inner,
        ease:'circ.out'
    })
})
gsap.fromTo('#circle',{
    scale:0
},{
    scale:1,
    duration:4
})
// gsap.fromTo('#button',{
//     opacity:0
// },{
//     opacity:1,
//     duration:2
// })
gsap.fromTo(".swiper", {
    y: "100px",
    opacity: 0.5
}, {
    y:0,
    opacity: 1,
    duration: 1,
    scrollTrigger: ".swiper"
})
gsap.fromTo(".learn-py", {
    backgroundImage : "none"
}, {
    backgroundImage: 'url("./images/bg_animated.svg")',
    // duration :0.2,
    scrollTrigger: ".python-article"
})
gsap.fromTo(".python-media", {
    y: "100px",
    opacity: 0.5
}, {
    y: 0,
    opacity: 1,
    duration: 1,
    scrollTrigger: ".python-media"
})
let count = 0
function text() {
    if (count == 0) {
        new TypeIt(".short-dis", {
            strings: "Python is a high-level, general-purpose, and very popular programming language. Python programming language (latest Python 3) is being used in web development, and Machine Learning applications, along with all cutting-edge technology in Software Industry.",
            speed: 50,
            // loop: true,
        }).go();
        count++
    }
}

ScrollTrigger.create({
    trigger: ".item-name",
    onEnter: text,
});

gsap.utils.toArray('.fline').forEach(fline => {
    gsap.fromTo(fline, {
        width : 0
    }, {
        width : "75%",
        duration : 1,
        scrollTrigger : fline
    })
})
var proCount = 0
var project = document.getElementsByClassName("project")
function projectAppear() {
    // project[proCount].style.transform = "translateX(0vw)";
    let ele = project[proCount]
    // console.log(ele.img)
    ele.setAttribute("data", `${proCount}`);
    proCount ++;
}
gsap.utils.toArray(".project").forEach(project=> {
    gsap.fromTo(project, {
        x: "100vw",
        opacity: 0.5
    }, {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: project,
        ease: "ease2.out"
    })
    ScrollTrigger.create({
        trigger: project,
        onEnter: projectAppear,
    });
})