document.addEventListener("DOMContentLoaded", () => {
  for (let el of document.getElementsByClassName("basic-carousel")) {
    el.basicCarouselWidth = 0;
    el.basicCarouselDisplacement = 0;
    el.basicCarouselStep = 1;
    el.basicCarouselPaused = false;
    // duplicate elements and count width
    const children = Array.from(el.children);
    children.forEach(child => {
      el.basicCarouselWidth += child.getBoundingClientRect().width;
      const clone = child.cloneNode(true);
      el.appendChild(clone);
    });
    const resize = () => {
      el.basicCarouselStep = 2 - el.getBoundingClientRect().width / 2000.0;
    }
    window.addEventListener("resize", resize);
    resize();
    el.onclick = () => { el.basicCarouselPaused = !el.basicCarouselPaused; };
    const animate = () => {
      if (!el.basicCarouselPaused) {
        el.basicCarouselDisplacement += el.basicCarouselStep;
        if (el.basicCarouselDisplacement > el.basicCarouselWidth) {
          el.basicCarouselDisplacement = 0;
        }
        el.style.transform = `translateX(-${el.basicCarouselDisplacement}px)`;
      }
      window.requestAnimationFrame(animate)
    };
    animate();
  }
});