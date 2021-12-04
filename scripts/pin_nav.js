// get the sticky element

const stickyElm = document.querySelector('nav')



const observer = new IntersectionObserver(
  ([entry]) => entry.target.classList.toggle('isSticky', entry.intersectionRatio < 1),
  {
    rootMargin: '0px 0px 120% 0px',
    threshold: [1]}

);



observer.observe(stickyElm)
