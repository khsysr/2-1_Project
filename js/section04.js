/* 섹션4  */
$(".autoplay").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 500,
  /* 반응형 */
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 500,
        infinite: true,
      },
    },
  ],
});
