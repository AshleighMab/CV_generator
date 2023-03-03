import { fetchUser } from "../apis/users.js";

// JavaScript for adding and removing education entries
const form = document.getElementById("education-form");
const educationList = document.getElementById("education-list");
const addEducationBtn = document.getElementById("add-education-btn");

let educationIndex = 1;

addEducationBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const educationContainer = document.createElement("div");
  educationContainer.classList.add("education-container");

  const schoolName = document.createElement("p");
  schoolName.textContent = `School Name: ${form["school-name"].value}`;
  educationContainer.appendChild(schoolName);

  const degree = document.createElement("p");
  degree.textContent = `Degree: ${form["degree"].value}`;
  educationContainer.appendChild(degree);

  const startDate = document.createElement("p");
  startDate.textContent = `Start Date: ${form["start-date"].value}`;
  educationContainer.appendChild(startDate);

  const endDate = document.createElement("p");
  endDate.textContent = `End Date: ${form["end-date"].value}`;
  educationContainer.appendChild(endDate);

  const removeEducationBtn = document.createElement("button");
  removeEducationBtn.classList.add("remove-education-btn");
  removeEducationBtn.textContent = "Remove Education";
  removeEducationBtn.addEventListener("click", function (event) {
	educationContainer.remove();
  });
  educationContainer.appendChild(removeEducationBtn);

  educationList.appendChild(educationContainer);

  form.reset();

  educationIndex++;
});


//JavaScript for adding and removing work entries
const workform = document.getElementById("work-form");
const workList = document.getElementById("work-list");
const addworkBtn = document.getElementById("add-work-btn");

let workIndex = 1;

addworkBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const workContainer = document.createElement("div");
  workContainer.classList.add("work-container");

  const workName = document.createElement("p");
 workName.textContent = `Company name: ${form["work-name"].value}`;
  workContainer.appendChild(workName);

  const title = document.createElement("p");
  title.textContent = `Title: ${form["title"].value}`;
  workContainer.appendChild(title);

  const startDatework = document.createElement("p");
  startDatework.textContent = `Start Date: ${form["start-date-work"].value}`;
  workContainer.appendChild(startDatework);

  const endDatework = document.createElement("p");
  endDatework.textContent = `End Date: ${form["end-date-work"].value}`;
  workContainer.appendChild(endDatework);

  const removeworkBtn = document.createElement("button");
  removeworkBtn.classList.add("remove-work-btn");
  removeworkBtn.textContent = "Remove Work";
  removeworkBtn.addEventListener("click", function (event) {
  workContainer.remove();
  });
  workContainer.appendChild(removeworkBtn);

  workList.appendChild(workContainer);

  workform.reset();

 workIndex++;
});


var form_1 = document.querySelector(".form_1");
var form_2 = document.querySelector(".form_2");
var form_3 = document.querySelector(".form_3");
var form_4 = document.querySelector(".form_4");
var form_5 = document.querySelector(".form_5");


var form_1_btns = document.querySelector(".form_1_btns");
var form_2_btns = document.querySelector(".form_2_btns");
var form_3_btns = document.querySelector(".form_3_btns");
var form_4_btns = document.querySelector(".form_4_btns");
var form_5_btns = document.querySelector(".form_5_btns");


var form_1_next_btn = document.querySelector(".form_1_btns .btn_next");
var form_2_back_btn = document.querySelector(".form_2_btns .btn_back");
var form_2_next_btn = document.querySelector(".form_2_btns .btn_next");
var form_3_back_btn = document.querySelector(".form_3_btns .btn_back");
var form_3_next_btn = document.querySelector(".form_3_btns .btn_next");
var form_4_back_btn = document.querySelector(".form_4_btns .btn_back");
var form_4_next_btn = document.querySelector(".form_4_btns .btn_next");
var form_5_back_btn = document.querySelector(".form_5_btns .btn_back");

var form_2_progessbar = document.querySelector(".form_2_progessbar");
var form_3_progessbar = document.querySelector(".form_3_progessbar");
var form_4_progessbar = document.querySelector(".form_4_progessbar");
var form_5_progessbar = document.querySelector(".form_5_progessbar");


var btn_done = document.querySelector(".btn_done");
var modal_wrapper = document.querySelector(".modal_wrapper");
var shadow = document.querySelector(".shadow");

form_1_next_btn.addEventListener("click", function(){
	form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function(){
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function(){
	form_2.style.display = "none";
	form_3.style.display = "block";

	form_3_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function(){
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_2_btns.style.display = "flex";
	form_3_btns.style.display = "none";

	form_3_progessbar.classList.remove("active");
});

form_3_next_btn.addEventListener("click", function(){
	form_3.style.display = "none";
	form_4.style.display = "block";

	form_4_btns.style.display = "flex";
	form_3_btns.style.display = "none";

	form_4_progessbar.classList.add("active");
});

form_4_back_btn.addEventListener("click", function(){
	form_3.style.display = "block";
	form_4.style.display = "none";
    console.log('clicked')

	form_3_btns.style.display = "flex";
	form_4_btns.style.display = "none";

	form_4_progessbar.classList.remove("active");
});

form_4_next_btn.addEventListener("click", function(){
	form_4.style.display = "none";
	form_5.style.display = "block";

	form_5_btns.style.display = "flex";
	form_4_btns.style.display = "none";

	form_5_progessbar.classList.add("active");
});


form_5_back_btn.addEventListener("click", function(){
	form_4.style.display = "block";
	form_5.style.display = "none";

	form_5_btns.style.display = "none";
	form_4_btns.style.display = "flex";

	form_5_progessbar.classList.remove("active");
});

btn_done.addEventListener("click", function(){
	modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function(){
	modal_wrapper.classList.remove("active");
})


let userInfo = JSON.parse(localStorage.getItem('UserInfo'))
console.log(userInfo.result.surname)
fetchUser(userInfo.result.surname)


