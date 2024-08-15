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
document.querySelector(".member-pfp").style.minHeight = h_body + "px";

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



let leftAchi = document.getElementsByClassName("left-achi");
let rightAchi = document.getElementsByClassName("right-achi");
let arrowBtnAchi = document.querySelector(".arrow-btn-achi");
let startAchi = document.getElementsByClassName("achievement")
let member = document.getElementsByClassName("member")
let left = document.getElementsByClassName("left")
let right = document.getElementsByClassName("right")
let arrowBtn = document.querySelector(".arrow-btn")

var achiCount = 0;
let names = ["rakesh", "sadi", "shahdin", "taorat", "tausif", "abir", "mahim"]
var members = {"rakesh" : 3,
    "sadi" : 3,
    "shahdin": 3,
    "taorat" : 1,
    "tausif" : 1,
    "abir" : 1,
    "mahim" : 1,
}
let membersCount = 0;
var maxachi = 3



var loadCount = 0

let start = 0;
let end = 6

function blur_ani(index) {
    let allElements = document.getElementsByClassName("blur_ele");
    
    if (membersCount == 0) {
        if (loadCount != 0) {
            start-=6
            end-=6
        }
        for (let i = start; i<end; i++) {
            allElements[i].classList.add("active");
        }
    }
    
    else {
        for (let i = start; i<end; i++) {
            allElements[i].classList.remove("active");
        }
        start += (6*index)
        end += (6*index)
        for (let i = start; i<end; i++) {
            allElements[i].classList.add("active");
        }
    }
    if (loadCount == 0) {
        setTimeout(function () {
            var blur_ele = gsap.timeline()

            blur_ele.fromTo(".active", {
                filter: "blur(10px)",
                y: "100px",
                opacity: 0
            }, {
                opacity: 1,
                filter: "blur(0px)",
                y: 0,
                duration: 0.8,
                stagger: {
                    "amount" : 0.3
                }
            })
            loadCount ++
        }, "1000")
    }
    else {
        var blur_ele = gsap.timeline()

        blur_ele.fromTo(".active", {
            filter: "blur(10px)",
            y: "100px",
            opacity: 0
        }, {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            duration: 0.8,
            stagger: {
                "amount" : 0.3
            }
        })
    }


    
}

function arrow_member(amount){
    var location = window.location.href;
    var index_char = location.indexOf("#");

    if (index_char != -1 && loadCount == 0) {
        for (let i = 0; i<names.length; i++) {
            if (location.indexOf(names[i]) != -1) {
                membersCount = i;
                start += 6*(i)
                end += 6*(i)
                console.log({
                    "start" : start,
                    "end" : end,
                    "i" : i
                })
                console.log("done")
            }
        }
    }

    achiCount = 0;
    membersCount += amount
    blur_ani(amount)
    
    maxachi = members[names[membersCount]]
    if (maxachi != 1) { arrow(0) }

    left[membersCount].style.opacity = 1;
    left[membersCount].style.pointerEvents = "auto";
    right[membersCount].style.opacity = 1;
    right[membersCount].style.pointerEvents = "auto";
    if (membersCount == 0) {
        left[membersCount].style.opacity = 0;
        left[membersCount].style.pointerEvents = "none";
    }

    if (membersCount == names.length-1) {
        right[membersCount].style.opacity = 0;
        right[membersCount].style.pointerEvents = "none";
    }

    for (let i = 0; i<member.length; i++){
        member[i].style.transform = `translateX(-${membersCount*100}vw)`
    }
}
arrow_member(0)



function arrow(num) {
    achiCount += num

    leftAchi[membersCount].style.opacity = 1;
    leftAchi[membersCount].style.pointerEvents = "auto";
    rightAchi[membersCount].style.opacity = 1;
    rightAchi[membersCount].style.pointerEvents = "auto";

    if (achiCount == 0) {
        leftAchi[membersCount].style.opacity = 0;
        leftAchi[membersCount].style.pointerEvents = "none";
    }
    if (achiCount == (maxachi-1)) {
        rightAchi[membersCount].style.opacity = 0;
        rightAchi[membersCount].style.pointerEvents = "none";
    }

    for (let i = 0; i<startAchi.length; i++){
        startAchi[i].style.transform = `translateX(-${achiCount*100}%)`
    }

}
if (maxachi != 1) { arrow(0) }



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


