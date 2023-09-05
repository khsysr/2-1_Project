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

/* 서브메뉴 */
$(document).ready(function () {
  $(".sub_menu").hide();
  $(".menu>ul>li").hover(function () {
    $(".sub_menu", this).stop().fadeToggle(200);
  });
});


/* function let(a ,b){
  console.log(a + b);
}

let(5,8);


const sum1 = {
  name :'nico',
  age : function(otherPersonName){
    console.log("hello" + otherPersonName + "nice To meet you")
  },
};

sum1.age('15');

 */



