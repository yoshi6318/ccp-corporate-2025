gsap.to(".vision-hero img", {
    scale: 1.45,
    delay: 1,
    borderRadius: 0,
    ease: "power3.inOut",
    stagger: {
      from: "random",
      grid: "auto",
      amount: 1.2,
    },
  });
  gsap.from(".vision-left-line-dot1", {
    height: 0,
    duration: 8,
  });
  gsap.from(".vision-main-item-title1", {
  x: "-10px",
  duration: 1.2,
  opacity: 0,
  delay: 0.5,
  });
  gsap.from(".vision-main-item-title1 p", {
  x: "-10px",
  duration: 1.2,
  opacity: 0,
  delay: 0.7,
  });
  gsap.from(".vision-main-desc-item1 h3", {
  y: "10px",
  duration: 1.2,
  opacity: 0,
  delay: 1.2,

  });
  gsap.from(".vision-main-desc-item1 p", {
  y: "10px",
  duration: 1.2,
  opacity: 0,
  delay: 1.6,
  stagger: 0.3,
  });



let tlVision1 = gsap.timeline({
    scrollTrigger: {
        trigger: '.vision-main-item1',
        start: 'top 85%', 
  }
});

tlVision1.from(".vision-main-item-title2", {
    x: "-10px",
    duration: 1.2,
    opacity: 0,
    delay: 0.5,
    });
tlVision1.from(".vision-main-item-title2 p", {
    x: "-10px",
    duration: 1.2,
    opacity: 0,
    },"-=0.9");
    tlVision1.from(".vision-main-desc-item2 h3", {
    y: "10px",
    duration: 1.2,
    opacity: 0,
    },"-=0.9");
    tlVision1.from(".vision-main-desc-item2 p", {
    y: "10px",
    duration: 1.2,
    opacity: 0,
    stagger: 0.3,
    },"-=0.9");
  
    ///
    let tlVision2 = gsap.timeline({
        scrollTrigger: {
            trigger: '.vision-main-item2',
            start: 'top 85%', 
      }
    });
    tlVision2.from(".vision-main-item-title3", {
        x: "-10px",
        duration: 1.2,
        opacity: 0,
        delay: 0.5,
        });

    tlVision2.from(".vision-main-item-title3 p", {
        x: "-10px",
        duration: 1.2,
        opacity: 0,
        },"-=0.9");

        tlVision2.from(".vision-main-desc-item3 h3", {
        y: "10px",
        duration: 1.2,
        opacity: 0,
        },"-=0.9");

        tlVision2.from(".vision-main-desc-item3 p", {
        y: "10px",
        duration: 1.2,
        opacity: 0,
        stagger: 0.3,
        },"-=0.9");

    let tlVision3 = gsap.timeline({
        scrollTrigger: {
            trigger: '.vision-value',
            start: 'top 85%', 
        }
    });
    tlVision3.from(".vision-left-line-dot2", {
        height: 0,
        duration: 8,
      });
    tlVision3.from(".vision-value-item", {
        y: "10px",
        duration: 1.2,
        opacity: 0,
        stagger: 0.3,
    },"-=8")
