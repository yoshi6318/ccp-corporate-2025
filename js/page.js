//////////////////////////
// scroll bar indicator

(function () {
  const progressSection = document.querySelector(".progress-section");
  const progressBar = document.querySelector(".progress-bar");
  const progressNum = document.querySelector(".progress-num");

  if (!progressSection || !progressBar || !progressNum) return;

  function getScrollPercentage() {
    const denom = document.body.scrollHeight - window.innerHeight;
    if (denom <= 0) return 0;
    return (window.scrollY / denom) * 100;
  }

  function updateProgressBar() {
    const percent = getScrollPercentage();
    progressBar.style.height = `${percent}%`;
    const value = Math.ceil(percent);
    const progressNumValue = value > 100 ? Math.round(value / 10) * 10 : value;
    progressNum.innerText = progressNumValue + "%";
    requestAnimationFrame(updateProgressBar);
  }

  updateProgressBar();

  // footerで indicatorを上にずらす（SP）
  if (window.innerWidth < 767 && typeof gsap !== "undefined") {
    gsap.to(".progress-section", {
      y: "-95px",
      duration: 0.1,
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "bottom bottom",
        toggleActions: "restart complete reverse complete",
      },
    });
  }
})();
