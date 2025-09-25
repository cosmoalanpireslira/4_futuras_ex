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



// JS para mover o carrossel
const lista = document.querySelector('.lista');
const esquerda = document.querySelector('.seta.esquerda');
const direita = document.querySelector('.seta.direita');

direita.addEventListener('click', () => {
  lista.scrollBy({ left: 220, behavior: 'smooth' });
});

esquerda.addEventListener('click', () => {
  lista.scrollBy({ left: -220, behavior: 'smooth' });
});


