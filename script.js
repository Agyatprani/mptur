var arr = document.querySelectorAll(".section")
.forEach(function(elem){
   gsap.from(elem,{
    scrollTrigger: {
        trigger: elem,
        start: "top 50%"
    }, 
    x:-900,
    duration:1.5,
    opacity:0,
    ease:Expo.easeInOut
    })
})

gsap.from("#left",{
    x:200,
    duration:2,
    opacity:0,
    ease:Expo.easeInOut
    })

    gsap.from("#right",{
        x:-200,
        duration:2.5,
        opacity:0,
        ease:Expo.easeInOut
        })    

var arr = document.querySelectorAll("h1")
.forEach(function(elem){
   gsap.from(elem,{
    scrollTrigger: {
        trigger: elem,
        start: "top 90%"
    }, 
    y:100,
    duration:3.2,
    opacity:0,
    ease:Expo.easeInOut
    })
})

var arr = document.querySelectorAll(".text")
.forEach(function(elem){
   gsap.from(elem,{
    scrollTrigger: {
        trigger: elem,
        start: "top 90%"
    }, 
    y:100,
    duration:4.5,
    opacity:0,
    ease:Expo.easeInOut
    })
})



