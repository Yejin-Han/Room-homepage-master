// header toggle
const header = document.querySelector('.header');
const headerToggle = document.querySelector('.header__toggle');

headerToggle.addEventListener('click', () => {
  header.classList.toggle('is-open');
});

// slide 2개 연동
const swiperImage = new Swiper('.swiper-image', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperContent = new Swiper('.swiper-content', {
  effect: 'fade',
  fadeEffect: { 
    crossFade: true
  },
  touchRatio: 0,
  loop: true,
});

swiperImage.on('slideChange', () => {
  const idx = swiperImage.realIndex;
  swiperContent.slideToLoop(idx);
});