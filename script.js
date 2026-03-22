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
let Taskinput = document.querySelector(".addTask form #task-input");
let Taskdetailsinput = document.querySelector(".addTask form textarea");
let taskCheckbox = document.querySelector(".addTask form #check");

let currentTask = [
  {
    task: "mandir jaao",
    details: "Hanuman ji k",
    imp: true,
  },
  {
    task: "mandir jaldi jaao",
    details: "krishna ji k",
    imp: true,
  },
  {
    task: "mandir na jaao",
    details: "modi ji k",
    imp: false,
  },
];

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // console.log(Taskinput.value, Taskdetailsinput.value);
  // console.log(taskCheckbox.checked);
});
var allTask = document.querySelector(".allTask"); 
// console.log(allTask)
var sum = "";
currentTask.forEach(function (elem) {
  sum += ` <div class="task">
              <h5>${elem.task}</h5>
              <button>Mark as Completed</button>
            </div>`;
});
allTask.innerHTML = sum;