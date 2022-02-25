const navSlide = () => {
  const burger = document.querySelector('.nav__burger');
  const nav = document.querySelector('.nav__menu');
  const navLinks = document.querySelectorAll('.nav__menu-item');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav_active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = ''
      } else {
        link.getElementsByClassName.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`
      }
    });
  });
}

navSlide();