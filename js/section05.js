/* 메인 비쥬얼 탭메뉴 */

let btn = document.querySelectorAll(".tab_menu5 a"), //버튼
  content = document.querySelectorAll(".content_right > div"); //콘텐츠

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function (e) {
    e.preventDefault();
    let orgTarget = e.target.getAttribute("href"), // 속성
      tabTarget = orgTarget.replace("#", "");
    document.getElementById(tabTarget).style.display = "none";
    content.forEach((things) => {
      things.style.display = "none";
    });
    content[i].style.display = "block";
    for (let j = 0; j < btn.length; j++) {
      btn[j].classList.remove("active");
    }
    e.target.classList.add("active");
  });
}

document.getElementById("tab6").style.display = "block";
