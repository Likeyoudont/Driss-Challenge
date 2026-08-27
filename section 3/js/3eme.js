let slider = document.querySelectorAll(".col-md-4");

slider.forEach(x => {
    x.addEventListener("mouseenter", function(){
       
        gsap.to(this,{
            duration: 0.3,
             ease: "power2.inOut",
             y:-5,
             scale:1.02,
        });
    });
    x.addEventListener("mouseleave",function(){
        gsap.to(this,{
            duration:0.3,
            y:0,
            scale:1,
            ease:"power2.out"
        });

    });
});