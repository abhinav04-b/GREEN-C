
const main = document.getElementById("main");
const home = document.getElementById("home");

setTimeout(() => {
    main.style.display = "none";
    home.style.display = "block";
}, 3000);

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.matchMedia()
  .add("(min-width: 768px)", () => {
    // Desktop Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        markers: false,
        scrub: 1,
        pin: true,
      },
    });
    tl.to("#left", { left: "-50%" }, "a");
    tl.to("#right", { right: "-60%" }, "a");
    // ... other animations
    tl.to("#center",{
        opacity:"1",
    },'a')
    
    tl.to("#marquee1",{
        left:"-80%",
        rotate:"0",
    },'b')
    tl.to("#marquee2",{
        left:"-80%",
        rotate:"0",
    },'b')
    tl.to("#card2",{
        scale:'0',
    })
    tl.to("#kisaan-head",{
        scale:'1',
    })
    tl.to("#about",{
      left:"0%"
    })
    tl.to("#about1",{
      bottom:'0',
    })
    tl.to("#quote",{
      scale:'1',
      rotate: '360deg'
    })
    tl.to("#kisaan-head",{
      scale:'0',
    },'c')
    tl.to("#about",{
      left:"-102%"
    },'c')
    tl.to("#about1",{
      bottom:'-475px',
    },'c')
    tl.to("#quote",{
      scale:'0',
      rotate: '-360deg'
    },'c')
    tl.to("#card2",{
      scale:'1',
    },'c')
    tl.to("#card1",{
      scale:'0',
  },'c')
  tl.to("#about1c",{
    top:'0'
  })
  tl.to("#about2c",{
    bottom:'0px'
  })
  tl.to("#intro",{
    left:'0'
  })
  tl.to("#com-head",{
    scale:'1'
  })
  tl.to("#center",{
    background:'black'
  },'d')
  tl.to("#label_com",{
    scale:'0'
  },'d')
  tl.to("#card2",{
    scale:'0'
  },'d')
  tl.to(".credit",{
    scale:'1'
  },'d')
  tl.to(".outro",{
    scale:'1'
  })
  tl.to(".end",{
    top:'-1300px'
  },'e')
  tl.to(".outro",{
    top:'-1800px'
  },'e')
  
  //end pc
  })
  .add("(max-width: 767px)", () => {
    // Mobile Animation (optional)
    const tlMobile = gsap.timeline({
      scrollTrigger: {
        trigger: "#home",
        markers: false,
        scrub: 1,
        pin: true,
      },
    });
    tlMobile.to("#left", { top: "-100%" }, "b"); // Move left element down on mobile
    tlMobile.to("#right", { top: '120%'}, "b"); // Move right element up on mobile
    // ... other
    tlMobile.to("#center",{
        opacity:"1"
    },'b')
    
    tlMobile.to("#marquee1",{
        left:"-80%",
        rotate:"0",
    },'b')
    tlMobile.to("#marquee2",{
        left:"-80%",
        rotate:"0",
    },'b')
    tlMobile.to("#card2",{
        scale:'0',
    })
  
})
});
