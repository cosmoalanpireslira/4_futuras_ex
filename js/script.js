// Animações ao rolar
const sections = document.querySelectorAll('.section');
const revealOnScroll = () => {
  sections.forEach(sec => {
    const secTop = sec.getBoundingClientRect().top;
    if (secTop < window.innerHeight - 100) {
      sec.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();
