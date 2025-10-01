
///////////////////
// intro (show only on first site visit)
const body = document.body;

const storageKey = 'ccp_intro_shown';
const params = new URLSearchParams(location.search);
const forceIntro = params.get('intro') === '1';
const hasShown = localStorage.getItem(storageKey) === '1';

function finalizeIntro() {
  const intro = document.querySelector(".intro");
  if (intro) intro.style.display = "none";
  body.style.overflow = "visible";
  // enable hero parallax after copy visible
  window.dispatchEvent(new Event('enableParallax'));
}

if (!hasShown || forceIntro) {
    // Mark as shown (unless forced preview, but still mark to avoid replay)
    localStorage.setItem(storageKey, '1');

    // Prevent scrolling during intro
    body.style.overflow = "hidden";

    let tlIntro = gsap.timeline({});

    tlIntro.from(".intro-blank",{
        duration: 0.9,
        opacity: 1
    }
    )
    tlIntro.fromTo(
      ".intro-copy1",
      { opacity: 0 },
      {
        duration: 0.9,
        opacity: 1,
        ease: "power1.out",
      },
      "+=0.3"
    )
    tlIntro.to(".intro-copy1",{
        duration: 1.4,
        opacity: 0,
        ease: "power1.out",
    })
    tlIntro.fromTo(
      ".intro-copy2",
      { opacity: 0 },
      {
        duration: 0.4,
        opacity: 1,
        ease: "power1.out",
      },
      "+=0.3"
    )
    tlIntro.to(".intro-copy2",{
        duration: 4.4,
        opacity: 0,
        ease: "power1.out",
    })
    
    tlIntro.to(".intro",{
        duration: 2.9,
        delay: 0.5,
        opacity: 0,
       // ease: "power3.out",
        zIndex: -999,
    },"-=3")
    // finalize: hide intro and re-enable interactions
    tlIntro.call(finalizeIntro)
    tlIntro.add("introOutEnd")
    
    tlIntro.from(".top-img",{
        duration: 4.4,
        scale: 1.5,
        ease: "power2.out",
        rotation: -10,
    },"-=2.8")
    tlIntro.from(".top-copy-upper",{
        duration: 2.2,
        x: "-20px",
        y: "-10px",
        skewX: "-25deg",
        opacity: 0,
        ease: "power1.out",
        stagger: 0.6,
    },"introOutEnd+=0.2")
    tlIntro.from(".top-copy-lower",{
        duration: 2.2,
        x: "-20px",
        y: "-10px",
        skewX: "-25deg",
        opacity: 0,
        ease: "power1.out",
        stagger: 0.6,
    },"introOutEnd+=0.2")
    tlIntro.call(() => { window.dispatchEvent(new Event('enableParallax')); })
    
} else {
    //ここに通常アクセス時の処理
    finalizeIntro();
}





let tlService = gsap.timeline({
        scrollTrigger: {
            trigger: '#service',
            start: 'top 80%', 
      }
    });

    tlService.to(".service-intro-desc .left-line", {
        height: "100%",
        duration: 2.5,
    })
    
    tlService.from(".service-intro-title-deco h2", {
        x: "-10px",
        duration: 1.0,
        opacity: 0,
    },"-=2.8")
    tlService.from(".service-intro-title-deco img", {
        skewX: "-15deg",
        scale: 1.2,
        duration: 1.0,
    },"-=2.5")
    tlService.from("#service .sec-title", {
       x: "-15px",
    duration: 1.2,
    opacity: 0,
    },"-=2.2")
    tlService.from(".service-intro .sec-subtitle", {
       x: "-15px",
    duration: 1.0,
    opacity: 0,
    },"-=2")
    tlService.from(".service-intro-title-icon", {
    duration: 1.4,
    opacity: 0,
    },"-=1.6")
    tlService.from(".service-intro-desc h3", {
        y: "10px",
        duration: 1.4,
    opacity: 0,
    },"-=2.2")
    tlService.from(".service-intro-desc p", {
        y: "10px",
        duration: 1.0,
    opacity: 0,
    stagger: 0.3,
    },"-=1.8")
    tlService.from(".service-intro-desc img", {
        y: "10px",
        duration: 1.0,
    opacity: 0,
    },"-=1.2")


    let tlService2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.service-main-desc',
            start: 'top 85%', 

      }
    });
    tlService2.from(".service-main-desc .top-line-reverse", {
        width: "0%",
        duration: 2.4,
     })
     tlService2.from(".service-main-desc .service-main-title", {
        y: "10px",
        duration: 1.0,
        opacity: 0,
    },"-=1.8")
     tlService2.from(".service-main-desc .sec-subtitle", {
        y: "5px",
        duration: 0.7,
        opacity: 0,
    },"-=1.4")
     tlService2.from(".service-main-desc-item h3", {
        y: "10px",
        duration: 1.4,
    opacity: 0,
    },"-=1.2")
     tlService2.from(".service-main-desc-item p", {
        y: "10px",
        duration: 1.0,
    opacity: 0,
    stagger: 0.3,
    },"-=0.9")
     tlService2.from(".service-link a", {
        y: "10px",
        duration: 1.0,
    opacity: 0,
    },"-=0.9")
     tlService2.from(".service-main-desc-deco", {
        x: "-20px",
        duration: 1.0,
    opacity: 0,
    },"-=0.9")
     tlService2.from(".skill-item-title", {
        duration: 1.4,
    opacity: 0,
    stagger: 0.6,
    },"-=3.6")
     tlService2.from(".skill-item-content h4", {
        y: "10px",
        duration: 1.6,
    opacity: 0,
    stagger: 0.6,
    },"-=3.6")
     tlService2.from(".skill-item-content-jp", {
        y: "10px",
        duration: 1.0,
    opacity: 0,
    stagger: 0.4,
    },"-=3.3")
     tlService2.from(".skill-item-content-en", {
        y: "10px",
        duration: 1.0,
    opacity: 0,
    stagger: 0.4,
    },"-=3.3")
     tlService2.from(".service-skill-item .top-line", {
       width: "0%",
        duration: 2.4,
    stagger: 0.6,
    },"-=3.6")
   
  
    

    gsap.from(".service-blank img",{
        scale: 1.15,
        duration: 1.8,
        ease: "Power1.out",
        scrollTrigger: {
            trigger: '.service-main-desc',
            start: 'top 80%', 
    }
    });

 //　VISION
    let tlVision = gsap.timeline({
        scrollTrigger: {
            trigger: '#vision',
            start: 'top 85%', 
      }
    });
    tlVision.from(".vision-main-deco h2", {
        x: "-20px",
        duration: 1.0,
        opacity: 0,
    })
    tlVision.from(".vision-main-deco img", {
        skewX: "-15deg",
        scale: 1.2,
        duration: 1.0,
    },"-=0.6")
    tlVision.from(".vision-main-container .sec-title", {
        y: "15px",
     duration: 1.2,
     opacity: 0,
     },"-=1.5")
     tlVision.from(".vision-main-container .sec-subtitle", {
        y: "5px",
     duration: 1.0,
     opacity: 0,
     },"-=1.2")
     tlVision.from(".vision-title-icon", {
        y: "10px",
        duration: 1.6,
     opacity: 0,
     },"-=0.6")
     tlVision.from("#vision .desc-items h3", {
         y: "10px",
         duration: 1.4,
     opacity: 0,
     },"-=1.2")
     tlVision.from("#vision .desc-items p", {
         y: "10px",
         duration: 1.0,
     opacity: 0,
     stagger: 0.3,
     },"-=1.1")
     tlVision.from(".vision-link a", {
         y: "10px",
         duration: 1.0,
     opacity: 0,
     stagger: 0.3,
     },"-=0.6")
     tlVision.from(".vision-deco", {
        duration: 3.6,
     opacity: 0,
     },"-=3")


    gsap.from(".projects-container .bottom-sec-lead p",{
        x: "-5%",
        duration: 1.2,
        opacity: 0,
        scrollTrigger: {
            trigger: '#projects' ,
            start: 'top 85%', 
      }
    })

    gsap.from(".projects-jacket-item img", {
      ease: Power0.easeNone,
        duration: 0.9,
        opacity: 0,
        stagger:0.25,
        scrollTrigger: {
            trigger: '#projects' ,
            start: 'top 85%', 
      }
    },)
    

    let tlProjects = gsap.timeline({
        scrollTrigger: {
            trigger: '.projects-bottom',
            start: 'top 85%', 
      }
    });

    tlProjects.from(".projects-middle-blank img", {
      skewX: "-45deg",
      duration: 2.4,
      },)
      tlProjects.from(".projects-link",{
        background: "none",
           duration: 3.0,
           opacity: 0
        },"-=2.1")
        tlProjects.from(".projects-link p",{
           x: "-30px",
            duration: 1.2,
           opacity: 0
        },"-=2.4")

        let tlProjects2 = gsap.timeline({

            scrollTrigger: {
                trigger: '.projects-middle',
                start: 'top 85%', 
          }
        });
    
        tlProjects2.from(".projects-bottom-item1 h4",{
            duration: 1.2,
            opacity: 0,
            y: "20px",
         })
        tlProjects2.from(".projects-bottom-item1 span",{
            duration: 0.9,
            opacity: 0,
            width: "0",
         },"-=0.6")
        tlProjects2.from(".projects-bottom-item1 img",{
            duration: 1.2,
            opacity: 0,
            y: "20px",
         },"-=0.3")
        tlProjects2.from(".projects-bottom-item1 p",{
            duration: 1.2,
            opacity: 0,
            y: "20px",
         },"-=0.6")
        tlProjects2.from(".projects-bottom-item2 p",{
            duration: 1.2,
            opacity: 0,
            y: "15px",
         },"-=2.7")
        tlProjects2.from(".projects-bottom-item2 img",{
            duration: 1.2,
            opacity: 0,
         },"-=2.1")


         gsap.from(".company-container .bottom-sec-lead p",{
            x: "-5%",
            duration: 1.2,
            opacity: 0,
            scrollTrigger: {
                trigger: '.projects-bottom',
                start: 'top 85%', 
            }
        })
         let tlCompany = gsap.timeline({

            scrollTrigger: {
                trigger: '.projects-bottom',
                start: 'top 90%', 
          
            }
        });

        tlCompany.from(".member-card-img img",{
            y: "50px",
            duration: 1.2,
            opacity: 0,
            stagger:0.25,
        
         })
