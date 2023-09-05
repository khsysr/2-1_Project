//seciton02 탭 메뉴

let btn1 = document.querySelectorAll(".tab_menu1 a"), //버튼
  content1 = document.querySelectorAll(".tab_content1 > div"); //콘텐츠

for (let i = 0; i < btn1.length; i++) {
  btn1[i].addEventListener("click", function (e) {
    e.preventDefault();
    let orgTarget = e.target.getAttribute("href"), // 속성
      tabTarget = orgTarget.replace("#", "");
    for (let a = 1; a < content1.length; a++) {
      content1[a].style.display = "none";
    }
    document.getElementById(tabTarget).style.display = "block";

    for (let j = 0; j < btn1.length; j++) {
      btn1[j].classList.remove("active1");
      e.target.classList.add("active1");
    }
  });
}

document.getElementById("tab4").style.display = "block";

/* 타이머 */

const remainTime = document.querySelector("#remain-time");

function diffDay() {
  const masTime = new Date("2023-8-12");
  const todayTime = new Date();

  const diff = masTime - todayTime;

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const diffMin = Math.floor((diff / (1000 * 60)) % 60);
  const diffSec = Math.floor((diff / 1000) % 60);

  remainTime.innerText = `${diffDay} 일   ${diffHour}시간 ${diffMin}분 ${diffSec}초`;
}

diffDay();
setInterval(diffDay, 1000);

/* 2번째 타이머 */

const remainTime1 = document.querySelector("#remain-time1");

function diffDaye() {
  const masTime1 = new Date("2023-8-7");
  const todayTime1 = new Date();

  const diff1 = masTime1 - todayTime1;

  const diffDay1 = Math.floor(diff1 / (1000 * 60 * 60 * 24));
  const diffHour1 = Math.floor((diff1 / (1000 * 60 * 60)) % 24);
  const diffMin1 = Math.floor((diff1 / (1000 * 60)) % 60);
  const diffSec1 = Math.floor((diff1 / 1000) % 60);

  remainTime1.innerText = `${diffDay1} 일   ${diffHour1}시간 ${diffMin1}분 ${diffSec1}초`;
}

diffDaye();
setInterval(diffDaye, 1000);

/* 3번째 타이머 */
const remainTime2 = document.querySelector("#remain-time2");

function diffDay2() {
  const masTime2 = new Date("2023-9-18");
  const todayTime2 = new Date();

  const diff2 = masTime2 - todayTime2;

  const diffDay2 = Math.floor(diff2 / (1000 * 60 * 60 * 24));
  const diffHour2 = Math.floor((diff2 / (1000 * 60 * 60)) % 24);
  const diffMin2 = Math.floor((diff2 / (1000 * 60)) % 60);
  const diffSec2 = Math.floor((diff2 / 1000) % 60);

  remainTime2.innerText = `${diffDay2} 일   ${diffHour2}시간 ${diffMin2}분 ${diffSec2}초`;
}

diffDay2();
setInterval(diffDay2, 1000);

/* 4번째 타이머 */
const remainTime3 = document.querySelector("#remain-time3");

function diffDay3() {
  const masTime3 = new Date("2023-8-28");
  const todayTime3 = new Date();

  const diff3 = masTime3 - todayTime3;

  const diffDay3 = Math.floor(diff3 / (1000 * 60 * 60 * 24));
  const diffHour3 = Math.floor((diff3 / (1000 * 60 * 60)) % 24);
  const diffMin3 = Math.floor((diff3 / (1000 * 60)) % 60);
  const diffSec3 = Math.floor((diff3 / 1000) % 60);

  remainTime3.innerText = `${diffDay3} 일   ${diffHour3}시간 ${diffMin3}분 ${diffSec3}초`;
}

diffDay3();
setInterval(diffDay3, 1000);

/* 5번째 타이머 */
const remainTime4 = document.querySelector("#remain-time4");

function diffDay4() {
  const masTime4 = new Date("2023-10-12");
  const todayTime4 = new Date();

  const diff4 = masTime4 - todayTime4;

  const diffDay4 = Math.floor(diff4 / (1000 * 60 * 60 * 24));
  const diffHour4 = Math.floor((diff4 / (1000 * 60 * 60)) % 24);
  const diffMin4 = Math.floor((diff4 / (1000 * 60)) % 60);
  const diffSec4 = Math.floor((diff4 / 1000) % 60);

  remainTime4.innerText = `${diffDay4} 일   ${diffHour4}시간 ${diffMin4}분 ${diffSec4}초`;
}

diffDay4();
setInterval(diffDay4, 1000);

/* 6번째 타이머 */
const remainTime5 = document.querySelector("#remain-time5");

function diffDay5() {
  const masTime5 = new Date("2023-10-12");
  const todayTime5 = new Date();

  const diff5 = masTime5 - todayTime5;

  const diffDay5 = Math.floor(diff5 / (1000 * 60 * 60 * 24));
  const diffHour5 = Math.floor((diff5 / (1000 * 60 * 60)) % 24);
  const diffMin5 = Math.floor((diff5 / (1000 * 60)) % 60);
  const diffSec5 = Math.floor((diff5 / 1000) % 60);

  remainTime5.innerText = `${diffDay5} 일   ${diffHour5}시간 ${diffMin5}분 ${diffSec5}초`;
}

diffDay5();
setInterval(diffDay5, 1000);

/* 7번째 타이머 */
const remainTime6 = document.querySelector("#remain-time6");

function diffDay6() {
  const masTime6 = new Date("2023-10-12");
  const todayTime6 = new Date();

  const diff6 = masTime6 - todayTime6;

  const diffDay6 = Math.floor(diff6 / (1000 * 60 * 60 * 24));
  const diffHour6 = Math.floor((diff6 / (1000 * 60 * 60)) % 24);
  const diffMin6 = Math.floor((diff6 / (1000 * 60)) % 60);
  const diffSec6 = Math.floor((diff6 / 1000) % 60);

  remainTime6.innerText = `${diffDay6} 일   ${diffHour6}시간 ${diffMin6}분 ${diffSec6}초`;
}

diffDay6();
setInterval(diffDay6, 1000);

/* 8번째 타이머 */
const remainTime7 = document.querySelector("#remain-time7");

function diffDay7() {
  const masTime7 = new Date("2023-10-12");
  const todayTime7 = new Date();

  const diff7 = masTime7 - todayTime7;

  const diffDay7 = Math.floor(diff7 / (1000 * 60 * 60 * 24));
  const diffHour7 = Math.floor((diff7 / (1000 * 60 * 60)) % 24);
  const diffMin7 = Math.floor((diff7 / (1000 * 60)) % 60);
  const diffSec7 = Math.floor((diff7 / 1000) % 60);

  remainTime7.innerText = `${diffDay7} 일   ${diffHour7}시간 ${diffMin7}분 ${diffSec7}초`;
}

diffDay7();
setInterval(diffDay7, 1000);
