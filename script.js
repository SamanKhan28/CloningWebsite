var cr = document.querySelector("#cursor")
var crbr = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    cr.style.left = dets.x + "px"
    cr.style.top = dets.y + "px"
    crbr.style.left = dets.x - 200 + "px"
    crbr.style.top = dets.y - 200 + "px"
})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(e){
    e.addEventListener("mouseenter", function(){
        cr.style.scale = 3
        cr.style.border = "1px solid #fff"
        cr.style.backgroundColor = "transparent"
    })
    e.addEventListener("mouseleave", function(){
        cr.style.scale = 1
        cr.style.border = "0px solid  #95C11E"
        cr.style.backgroundColor = "#95C11E"
    })

})

gsap.to("#nav",{
    backgroundColor : "#000",
   height:"100px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end: "top -11%",
        scrub: 1  
    }
 })
 gsap.to("#main",{
    backgroundColor: '#000',
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
     //  markers: true,
        start: "top -25%",
        end: "top -60%",
        scrub: 2
    }

 })
 gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    }
  })
  gsap.from(".cards", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".cards",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    }
  })
  gsap.from("#col1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
  })
  gsap.from("#col2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#col1",
        scroller:"body",
        start: "top 55%",
        end: "top 45%",
        scrub:4
    }
  })
  gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start: "top 75%",
        end: "top 70%",
        scrub:3
    }
  })