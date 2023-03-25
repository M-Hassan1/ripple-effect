/*        Ripple Effect         */
const buttonRef = document.querySelector(".btn");
const btn2 = buttonRef.querySelector(".submit");

buttonRef.addEventListener("click", function (e) {
  console.log(e.offsetX);
  console.log(e.offsetY);

  const offX = e.offsetX;
  const offY = e.offsetY;
  btn2.style.left = `${offX}px`;
  btn2.style.top = `${offY}px`;

  btn2.style.transitionDuration = "450ms";
  btn2.style.width = "300%";
  btn2.style.height = "300%";
  btn2.style.opacity = "0";
  const durationStyle = window.getComputedStyle(btn2).transitionDuration;
  const durationMiliSec = parseFloat(durationStyle) * 1000;


  window.setTimeout(() => {
    btn2.style.transitionDuration = "0ms";
    btn2.style.width = "0%";
    btn2.style.height = "0%";
    btn2.style.opacity = "1";
  }, durationMiliSec);
});

let scrollPos = 0;
const interval = window.setInterval(() => {
  scrollPos += 900;
  window.scrollTo({ top: scrollPos })
}, 3000);