gsap.from(".service-hero h3", {
   opacity: 0,
   x: "-15px",
   duration: 1.2,
   delay: 0.5,
   stagger: 0.35,
   letterSpacing: "2px"
  });
gsap.from(".service-left-line-dot", {
    height: 0,
    duration: 20,
  });

gsap.from(".service-item-title-index1 p", {
      duration: 1.0,
      delay: 0.5,
      opacity: 0,
    })

gsap.from(".service-item-title-label1 p", {
      duration: 1.0,
      delay: 1,
      opacity: 0,
    })
gsap.from(".service-item-title-line1", {
      duration: 5,
      delay: 1,
      width: 0,
    })
gsap.from(".service-item-desc1 p", {
        duration: 1.0,
        delay: 1.2,
        opacity: 0,
        y: 20,
        stagger: 0.3,
    })
gsap.from(".service-item-desc1 img", {
        duration: 1.0,
        delay: 2.0,
        opacity: 0,
        y: 20,
    })


    
let tlService1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.service-item1',
        start: 'top 85%',
  }
});

tlService1.from(".service-item-title-index2 p", {
    duration: 1.0,
    opacity: 0,
  })

tlService1.from(".service-item-title-label2 p", {
    duration: 1.0,
    opacity: 0,
  },"-=0.6")
tlService1.from(".service-item-desc2-1 p", {
      duration: 1.0,
      opacity: 0,
      y: 20,
      stagger: 0.3,
  },"-=0.3")
tlService1.from(".service-item-desc2-1 img", {
      duration: 1.0,
      opacity: 0,
      y: 20,
  }, "-=0.6")
  tlService1.from(".service-item-title-line2", {
    duration: 5,
    width: 0,
  }, "-=2.4")

  let tlService2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.service-item-desc2-1',
        start: 'top 85%',
  }
});
tlService2.from(".service-item-desc2-2 p", {
    duration: 1.0,
    opacity: 0,
    y: 20,
    stagger: 0.3,
})
tlService2.from(".service-item-desc2-2 img", {
    duration: 1.0,
    opacity: 0,
    y: 20,
}, "-=0.6")


let tlService3 = gsap.timeline({
    scrollTrigger: {
        trigger: '.service-item2',
        start: 'top 85%',

  }
});

tlService3.from(".service-item-title-index3 p", {
    duration: 1.0,
    opacity: 0,
  })

tlService3.from(".service-item-title-label3 p", {
    duration: 1.0,
    opacity: 0,
  },"-=0.6")
tlService3.from(".service-item-desc3 p", {
      duration: 1.0,
      opacity: 0,
      y: 20,
      stagger: 0.3,
  },"-=0.3")
tlService3.from(".service-item-desc3 img", {
      duration: 1.0,
      opacity: 0,
      y: 20,
  }, "-=0.6")
  tlService3.from(".service-item-title-line3", {
    duration: 5,
    width: 0,
  }, "-=2.4")


  let tlService4 = gsap.timeline({
    scrollTrigger: {
        trigger: '.service-item3',
        start: 'top 85%',
  }
});

tlService4.from(".service-item-title-index4 p", {
    duration: 1.0,
    opacity: 0,
  })

tlService4.from(".service-item-title-label4 p", {
    duration: 1.0,
    opacity: 0,
  },"-=0.6")
tlService4.from(".service-item-desc4 p", {
      duration: 1.0,
      opacity: 0,
      y: 20,
      stagger: 0.3,
  },"-=0.3")
tlService4.from(".service-item-desc4 img", {
      duration: 1.0,
      opacity: 0,
      y: 20,
  }, "-=0.6")
  tlService4.from(".service-item-title-line4", {
    duration: 5,
    width: 0,
  }, "-=2.4")
