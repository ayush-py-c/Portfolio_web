let slideIndex = 0;

function changeSlide(n) {
  let slides = document.querySelectorAll('.slider img');
  let dots = document.querySelectorAll('.dot');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = 0;
    dots[i].classList.remove('active');
  }

  slides[n].style.zIndex = 1;
  dots[n].classList.add('active');
  slideIndex = n;
}

function autoSlide() {
  let slides = document.querySelectorAll('.slider img');
  let dots = document.querySelectorAll('.dot');

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = 0;
    dots[i].classList.remove('active');
  }

  slides[slideIndex].style.zIndex = 1;
  dots[slideIndex].classList.add('active');

  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  setTimeout(autoSlide, 3000);
}

autoSlide();