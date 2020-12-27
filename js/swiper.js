var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 0,
  preventClicks: false,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    bulletClass : 'my-bullet',
    bulletActiveClass: 'my-bullet-active',
    clickable: true,
    dynamicMainBullets: 1,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
  autoplay: {
    delay: 3000,
    stopOnLastSlide: false,
    disableOnInteraction: true,
    },
});