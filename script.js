var allelems = document.querySelectorAll(".elems");
// console.log(allelems)
allfullelemsBack = document.querySelectorAll(".fullelem .back");
allelems.forEach(function (elems) {
  // console.log(elems)
  elems.addEventListener("click", function () {
    document.querySelectorAll(".fullelem")[elems.id - 1].style.display =
      "block";
  });
});
allfullelemsBack.forEach(function (back) {
  // console.log(back)
  back.addEventListener("click", function () {
    // console.log(back)doc
    document.querySelectorAll(".fullelem")[back.id].style.display = "none";
  });
});

// openFeatures();
let form = document.querySelector(".addTask form");
let Taskinput = document.querySelector(".addTask form input");
let Taskdetailsinput = document.querySelector(".addTask form textarea");
form.addEventListener("submit", function (e) {
  e.preventDefault();
});
