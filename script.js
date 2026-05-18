const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

document.querySelectorAll('.panel h2').forEach(title => {
  title.addEventListener('click', () => {
    if (window.innerWidth <= 980) title.parentElement.classList.toggle('open');
  });
});

const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.site-nav a')];
const updateActive = () => {
  let current = 'home';
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < 130) current = section.id;
  });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${current}`));
};
window.addEventListener('scroll', updateActive, { passive: true });
updateActive();
