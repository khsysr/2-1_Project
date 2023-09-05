const rowPerPage = 5;
const rows = document.querySelectorAll("#my_table tbody tr");
const rowsCount = rows.length;
const pageCount = rowsCount / rowPerPage;
const numbers = document.querySelector("#numbers");

console.log(rows);
//페이지네이션 생성
for (let i = 1; i <= pageCount; i++) {
  numbers.innerHTML += `<li><a href="#sky">${i}</a></li>`;
}
const numberBtn = numbers.querySelectorAll("a"); //a태그선택
numberBtn[0].classList.add("active");
/*
forEach() 배열에 활용하는 메서드, 배열 선택할 때 반복문에서 사용함
*/
numberBtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    for (nb of numberBtn) {
      nb.classList.remove("active");
    }
    e.target.classList.add("active");
    displayTable(idx);
  });
});

function displayTable(idx) {
  /*
slice(start, end) **splice()랑 구분해서사용해야됨
nodelist 배열의 상태로 만들려면
1. Array.from(대상)
2. [...대상]
*/
  /*
for/of문 반복할 수 있는 객체를 순회할 수 있도록 해줌
for(변수 of 객체){실행문}
*/
  let start = idx * rowPerPage;
  let end = start + rowPerPage;
  let rowsArray = [...rows];
  for (let ro of rowsArray) {
    ro.style.display = "none";
  }
  let newRows = rowsArray.slice(start, end);
  for (let nr of newRows) {
    nr.style.display = "";
  }
}
displayTable(0);
