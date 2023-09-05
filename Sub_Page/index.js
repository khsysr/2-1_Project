/* 서브메뉴 */
$(document).ready(function () {
  $(".sub_menu").hide();
  $(".menu>ul>li").hover(function () {
    $(".sub_menu", this).stop().fadeToggle(200);
  });
});

/* 메인비쥬얼, 슬라이드 */

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 3000,
  },
});
