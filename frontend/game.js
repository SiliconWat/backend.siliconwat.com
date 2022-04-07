function flip(direction) {
  const main = document.querySelector("main")
  main.classList.toggle("flip", direction)
}

function slide(direction) {
  const main = document.querySelector("main")
  main.style.animation = "none";
  main.offsetHeight; /* trigger reflow */
  main.style.animation = null; 
  main.style.animationName = direction ? "slideLeft" : "slideRight";
}

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-SZZBTK3QFK');