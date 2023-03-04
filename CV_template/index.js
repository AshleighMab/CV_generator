import { fetchUser } from "../apis/users.js";
import {createPerson} from './../apis/person.js'
import {token_Key} from './../appConstants/index.js'
import {setToken} from './../utils.js'


// let title = document.getElementById('title');
// let fname = document.getElementById('fname');
let lname = document.getElementById('surname');
let dob = document.getElementById('dob');
let race = document.getElementById('race');
let email = document.getElementById('email');
let bio = document.getElementById('about');
let cellphone = document.getElementById('cell');
let address = document.getElementById('address');


let form1button = document.getElementById('form1');

setToken(token_Key,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImQ3N2RkMGVhLTNlMmQtZjhjNS1mODAzLTNhMDlhOWEyYmU4NyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6ImM0YTVkMmY3LTE0MzctNDRmMC05OTdjLTMwNGUwYTEzZDdlNSIsImlhdCI6MTY3NzkyNjE0NCwibmJmIjoxNjc3OTI2MTQ0LCJleHAiOjE2NzgwMTI1NDQsImlzcyI6IlJlc3VtZUdlbmVyYXRvciIsImF1ZCI6IlJlc3VtZUdlbmVyYXRvciJ9.f9kUVJU2kkRP_K3U7IGIodOcv7nIrA7P-yAf0vgk_4Y");


form1button.addEventListener('click', e=>{
    e.preventDefault(); // prevent form submission

    
    const persondata={
		title: 1,
		dateOfBirth: dob.value,
		gender: 0,
		race: race.value,
		identificationNumber: "123456789012",
		cellNumber: cellphone.value,
		address: address.value,
		userId: 30,
    }

    console.log("values ::",persondata)
    createPerson(persondata)
})


// JavaScript for adding and removing education entries
const form_education = document.getElementById("education-form");
const educationList = document.getElementById("education-list");
const addEducationBtn = document.getElementById("add-education-btn");

let educationIndex = 1;

addEducationBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const educationContainer = document.createElement("div");
  educationContainer.classList.add("education-container");

  const schoolName = document.createElement("p");
  schoolName.textContent = `School Name: ${form_education["school-name"].value}`;
  educationContainer.appendChild(schoolName);

  const degree = document.createElement("p");
  degree.textContent = `Degree: ${form_education["degree"].value}`;
  educationContainer.appendChild(degree);

  const startDate = document.createElement("p");
  startDate.textContent = `Start Date: ${form_education["start-date"].value}`;
  educationContainer.appendChild(startDate);

  const endDate = document.createElement("p");
  endDate.textContent = `End Date: ${form_education["end-date"].value}`;
  educationContainer.appendChild(endDate);

  const removeEducationBtn = document.createElement("button");
  removeEducationBtn.classList.add("remove-education-btn");
  removeEducationBtn.textContent = "Remove Education";
  removeEducationBtn.addEventListener("click", function (event) {
	educationContainer.remove();
  });
  educationContainer.appendChild(removeEducationBtn);

  educationList.appendChild(educationContainer);

  form_education.reset();

  educationIndex++;
});

const form_work = document.getElementById("work-experience-form");
      const workExperienceList = document.getElementById("work-experience-list");
      const addWorkExperienceBtn = document.getElementById("add-work-experience-btn");

      let workExperienceIndex = 1;

      addWorkExperienceBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const workExperienceContainer = document.createElement("div");
        workExperienceContainer.classList.add("work-experience-container");

        const companyName = document.createElement("p");
        companyName.textContent = `Company Name: ${form_work["company-name"].value}`;
        workExperienceContainer.appendChild(companyName);

        const position = document.createElement("p");
        position.textContent = `Position: ${form_work["position"].value}`;
        workExperienceContainer.appendChild(position);

        const startDate = document.createElement("p");
        startDate.textContent = `Start Date: ${form_work["start-date"].value}`;
        workExperienceContainer.appendChild(startDate);

        const endDate = document.createElement("p");
        endDate.textContent = `End Date: ${form_work["end-date"].value}`;
        workExperienceContainer.appendChild(endDate);

        const removeWorkExperienceBtn = document.createElement("button");
        removeWorkExperienceBtn.classList.add("remove-work-experience-btn");
        removeWorkExperienceBtn.textContent = "Remove Work Experience";
        removeWorkExperienceBtn.addEventListener("click", function (event) {
          workExperienceContainer.remove();
        });
        workExperienceContainer.appendChild(removeWorkExperienceBtn);

        workExperienceList.appendChild(workExperienceContainer);

        form_work.reset();

        workExperienceIndex++;
      });

	   // JavaScript for adding and removing skill entries
	   const form_skills = document.getElementById("skill-form");
	   const skillList = document.getElementById("skill-list");
	   const addSkillBtn = document.getElementById("add-skill-btn");
 
	   let skillIndex = 1;
 
	   addSkillBtn.addEventListener("click", function (event) {
		 event.preventDefault();
 
		 const skillContainer = document.createElement("div");
		 skillContainer.classList.add("skill-container");
 
		 const skillName = document.createElement("p");
		 skillName.textContent = `Skill Name: ${form_skills["skill-name"].value}`;
		 skillContainer.appendChild(skillName);
 
		 const skillLevel = document.createElement("p");
		 skillLevel.textContent = `Skill Level: ${form_skills["skill-level"].value}`;
		 skillContainer.appendChild(skillLevel);
 
		 const removeSkillBtn = document.createElement("button");
		 removeSkillBtn.classList.add("remove-skill-btn");
		 removeSkillBtn.textContent = "Remove Skill";
		 removeSkillBtn.addEventListener("click", function (event) {
		   skillContainer.remove();
		 });
		 skillContainer.appendChild(removeSkillBtn);
 
		 skillList.appendChild(skillContainer);
 
		 form_skills.reset();
 
		 skillIndex++;
	   });

	    // JavaScript for adding and removing certification entries
		const form_certifications = document.getElementById("certification-form");
		const certificationList = document.getElementById("certification-list");
		const addCertificationBtn = document.getElementById("add-certification-btn");
  
		let certificationIndex = 1;
  
		addCertificationBtn.addEventListener("click", function (event) {
		  event.preventDefault();
  
		  const certificationContainer = document.createElement("div");
		  certificationContainer.classList.add("certification-container");
  
		  const certificationName = document.createElement("p");
		  certificationName.textContent = `Certification Name: ${form_certifications["certification-name"].value}`;
		  certificationContainer.appendChild(certificationName);
  
		  const certificationAuthority = document.createElement("p");
		  certificationAuthority.textContent = `Certification Authority: ${form_certifications["certification-authority"].value}`;
		  certificationContainer.appendChild(certificationAuthority);
  
		  const certificationDate = document.createElement("p");
		  certificationDate.textContent = `Certification Date: ${form_certifications["certification-date"].value}`;
		  certificationContainer.appendChild(certificationDate);
  
		  const removeCertificationBtn = document.createElement("button");
		  removeCertificationBtn.classList.add("remove-certification-btn");
		  removeCertificationBtn.textContent = "Remove Certification";
		  removeCertificationBtn.addEventListener("click", function (event) {
			certificationContainer.remove();
		  });
		  certificationContainer.appendChild(removeCertificationBtn);
  
		  certificationList.appendChild(certificationContainer);
  
		  form_certifications.reset();
  
		  certificationIndex++;
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
console.log(userInfo.result.id)
fetchUser(userInfo.result.id)


