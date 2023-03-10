import { createPerson } from './../apis/person.js'
import { token_Key } from './../appConstants/index.js'
import { setToken } from './../utils.js'
import {createEducation} from "./../apis/education.js"
import { createResume } from "./../apis/resume.js";
import { createWork } from "./../apis/work.js";
import { createSkill} from "./../apis/skill.js";
import { createCert } from "./../apis/certificate.js";


let dob = document.getElementById('dob');
let race = document.getElementById('race');
let cellphone = document.getElementById('cell');
let title = document.getElementById('title');
let address = document.getElementById('address');
let gender = document.getElementById('gender');
let idnum = document.getElementById('idnum');


let btnpersonalDetails = document.getElementById('btnpersonalDetails');

setToken(token_Key, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjBiMmIxNGUyLWJmYTctZjNiNy0zMjRmLTNhMDljZTdjNTM0OCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6Ijk0Mzc1ZDQwLTcxNGMtNDBhZC04ZThiLWRmYjRkYzkzODAzMCIsImlhdCI6MTY3ODQyNzUzMiwibmJmIjoxNjc4NDI3NTMyLCJleHAiOjE2Nzg1MTM5MzIsImlzcyI6IlJlc3VtZUdlbmVyYXRvciIsImF1ZCI6IlJlc3VtZUdlbmVyYXRvciJ9.EM6V7YyWPVPcCpIQhcX-q7tSqW3q8hlrYMbOdiwi2Z4");


btnpersonalDetails.addEventListener('click', e => {
	e.preventDefault();

	var formData =  new FormData();
	formData.append('title', title.value ?? '')
	formData.append('dateOfBirth', dob.value ?? '')
	formData.append('gender', gender.value ?? 1)
	formData.append('race', race.value ?? 1)
	formData.append('identificationNumber', idnum.value ?? '')
	formData.append('cellNumber', cellphone.value ?? '')
	formData.append('address', address.value ?? '')
	formData.append('userId', localStorage.getItem("UserId"))

	console.log("values ::", formData)
	for (const pair of formData.entries()) {
		console.log(`${pair[0]}, ${pair[1]}`);
	  }
	
	createPerson(formData)

})
////////////////////////////////////////////////////////////////////////////////////////////////////
//create resume
let createResumeBtn = document.getElementById('createResumeBtn');


createResumeBtn.addEventListener('click', e => {
	e.preventDefault(); 

	let personInfo = JSON.parse(localStorage.getItem('UserInfo'))
	console.log('passed' , personInfo.result.id)

	const resumedata ={	
		name: "Resume Name",
		personId:  personInfo.result.id
	}
	console.log("Resume details ::", resumedata)
    createResume(resumedata)

})

//////////////////////////////////////////////////////////////////////////////////////////////
//EDUCATION
const form_education = document.getElementById("education-form");
const educationList = document.getElementById("education-list");
const addEducationBtn = document.getElementById("add-education-btn");
const eduList = [];

let educationIndex = 1;

addEducationBtn.addEventListener("click", function (event) {
	event.preventDefault();
	
	const educationContainer = document.createElement("div");
	educationContainer.classList.add("education-container");
	
	const schoolNameHeading = document.createElement("h4");
    schoolNameHeading.textContent = "School:";
    educationContainer.appendChild(schoolNameHeading);

	const schoolName = document.createElement("p");
	schoolName.textContent = `${form_education["school-name"].value}`;
	educationContainer.appendChild(schoolName);

	const degreeNameHeading = document.createElement("h4");
    degreeNameHeading.textContent = "Degree:";
    educationContainer.appendChild(degreeNameHeading);
	const degree = document.createElement("p");
	degree.textContent = `${form_education["degree"].value}`;
	educationContainer.appendChild(degree);

	const majorNameHeading = document.createElement("h4");
    majorNameHeading.textContent = "Major:";
    educationContainer.appendChild(majorNameHeading);
	const major = document.createElement("p");
	major.textContent = `${form_education["major"].value}`;
	educationContainer.appendChild(major);

	const dateNameHeading = document.createElement("h4");
    dateNameHeading.textContent = "Date:";
    educationContainer.appendChild(dateNameHeading);
	const GraduationDate = document.createElement("p");
	GraduationDate.textContent = `${form_education["end-date"].value}`;
	educationContainer.appendChild(GraduationDate);

	const removeEducationBtn = document.createElement("button");
	removeEducationBtn.classList.add("remove-education-btn");
	removeEducationBtn.textContent = "Remove Education";
	removeEducationBtn.addEventListener("click", function (event) {
		educationContainer.remove();
	});
	
	educationContainer.appendChild(removeEducationBtn);
	educationList.appendChild(educationContainer);
	eduList.push({
		schoolName : schoolName.textContent,
   		degree: degree.textContent,
   		GraduationDate: GraduationDate.textContent,
   		major: major.textContent,
   		

	})
	form_education.reset();

	educationIndex++;
});

let btnEducation = document.getElementById('eddu_submit');

btnEducation.addEventListener('click', e => {
	e.preventDefault(); 

	let resume = JSON.parse(localStorage.getItem('ResumeInfo'))

	eduList.map((item)=>{
		item.ResumeId = resume.result.id;
		createEducation(item)
	   });

})

/////////////////////////////////////////////////////////////////////////////////////////////////
// WORK EXPERIENCE 

const form_work = document.getElementById("work-experience-form");
const workExperienceList = document.getElementById("work-experience-list");
const addWorkExperienceBtn = document.getElementById("add-work-experience-btn");

let workExperienceIndex = 1;

addWorkExperienceBtn.addEventListener("click", function (event) {
	event.preventDefault();

	const workExperienceContainer = document.createElement("div");
	workExperienceContainer.classList.add("work-experience-container");

	const companyNameHeading = document.createElement("h4");
    companyNameHeading.textContent = "Name:";
    workExperienceContainer.appendChild(companyNameHeading);
	const companyName = document.createElement("p");
	companyName.textContent = `${form_work["company-name"].value}`;
	workExperienceContainer.appendChild(companyName);

	const positionNameHeading = document.createElement("h4");
    positionNameHeading.textContent = "Position:";
    workExperienceContainer.appendChild(positionNameHeading);
	const position = document.createElement("p");
	position.textContent = ` ${form_work["position"].value}`;
	workExperienceContainer.appendChild(position);

	const startDateNameHeading = document.createElement("h4");
    startDateNameHeading.textContent = "Start date:";
    workExperienceContainer.appendChild(startDateNameHeading);
	const startDate = document.createElement("p");
	startDate.textContent = `${form_work["start-date"].value}`;
	workExperienceContainer.appendChild(startDate);

	const endDateNameHeading = document.createElement("h4");
    endDateNameHeading.textContent = "End date:";
    workExperienceContainer.appendChild(endDateNameHeading);
	const endDate = document.createElement("p");
	endDate.textContent = `${form_work["end-date"].value}`;
	workExperienceContainer.appendChild(endDate);

	const removeWorkExperienceBtn = document.createElement("button");
	removeWorkExperienceBtn.classList.add("remove-work-experience-btn");
	removeWorkExperienceBtn.textContent = "Remove Work Experience";
	removeWorkExperienceBtn.addEventListener("click", function (event) {
		workExperienceContainer.remove();
	});
	workExperienceContainer.appendChild(removeWorkExperienceBtn);

	workExperienceList.appendChild(workExperienceContainer);
	workList.push({
		companyName : companyName.textContent,
		title: position.textContent,
		startDate: startDate.textContent,
		endDate: endDate.textContent,
	})
	form_work.reset();

	workExperienceIndex++;
});

const workList = [];

let btnWork = document.getElementById('worksubmit');

btnWork.addEventListener('click', e => {
	e.preventDefault(); 

	let resume = JSON.parse(localStorage.getItem('ResumeInfo'))
	workList.map((item)=>{
		item.ResumeId = resume.result.id;
		createWork(item)
	   });

})

////////////////////////////////////////////////////////////////////////////////////////////////////
// SKILLS

const form_skills = document.getElementById("skill-form");
const skillList = document.getElementById("skill-list");
const addSkillBtn = document.getElementById("add-skill-btn");
const skillsList = [];

let skillIndex = 1;

addSkillBtn.addEventListener("click", function (event) {
	event.preventDefault();

	const skillContainer = document.createElement("div");
	skillContainer.classList.add("skill-container");

	const skillNameHeading = document.createElement("h4");
    skillNameHeading.textContent = "Name:";
    skillContainer.appendChild(skillNameHeading);
	const skillName = document.createElement("p");
	skillName.textContent = `${form_skills["skillName"].value}`;
	skillContainer.appendChild(skillName);

	const skillLevelHeading = document.createElement("h4");
    skillLevelHeading.textContent = "Level:";
    skillContainer.appendChild(skillLevelHeading);
	const skillLevel = document.createElement("p");
	skillLevel.textContent = `${form_skills["skillLevel"].value}`;
	skillContainer.appendChild(skillLevel);

	const removeSkillBtn = document.createElement("button");
	removeSkillBtn.classList.add("remove-skill-btn");
	removeSkillBtn.textContent = "Remove Skill";
	removeSkillBtn.addEventListener("click", function (event) {
		skillContainer.remove();
	});
	skillContainer.appendChild(removeSkillBtn);

	skillList.appendChild(skillContainer);
	skillsList.push({
		name : skillName.textContent,
		proficiencyLevel: skillLevel.textContent,
	})
	form_skills.reset();

	skillIndex++;
});

let btnSkill = document.getElementById('skillsubmit');

btnSkill.addEventListener('click', e => {
	e.preventDefault(); 

	let resume = JSON.parse(localStorage.getItem('ResumeInfo'))
	console.log('passed skill' , skillsList)

	skillsList.map((item)=>{
		item.ResumeId = resume.result.id;
		createSkill(item)
	   });
})

///////////////////////////////////////////////////////////////////////////////////////////////////
//CERTIFICATES

const form_certifications = document.getElementById("certification-form");
const certificationList = document.getElementById("certification-list");
const addCertificationBtn = document.getElementById("add-certification-btn");
const certificateList = []; 

let certificationIndex = 1;

addCertificationBtn.addEventListener("click", function (event) {
	event.preventDefault();

	const certificationContainer = document.createElement("div");
	certificationContainer.classList.add("certification-container");

	const certificationNameHeading = document.createElement("h4");
    certificationNameHeading.textContent = "Name:";
    certificationContainer.appendChild(certificationNameHeading);
	const certificationName = document.createElement("p");
	certificationName.textContent = `${form_certifications["certification-name"].value}`;
	certificationContainer.appendChild(certificationName);

	const certificationAuthNameHeading = document.createElement("h4");
    certificationAuthNameHeading.textContent = "Authority:";
    certificationContainer.appendChild(certificationAuthNameHeading);
	const certificationAuthority = document.createElement("p");
	certificationAuthority.textContent = `${form_certifications["certification-authority"].value}`;
	certificationContainer.appendChild(certificationAuthority);

	const certificationDateNameHeading = document.createElement("h4");
    certificationDateNameHeading.textContent = "Date:";
    certificationContainer.appendChild(certificationDateNameHeading);
	const certificationDate = document.createElement("p");
	certificationDate.textContent = `${form_certifications["certification-date"].value}`;
	certificationContainer.appendChild(certificationDate);

	const removeCertificationBtn = document.createElement("button");
	removeCertificationBtn.classList.add("remove-certification-btn");
	removeCertificationBtn.textContent = "Remove Certification";
	removeCertificationBtn.addEventListener("click", function (event) {
		certificationContainer.remove();

		
	});

	certificationContainer.appendChild(removeCertificationBtn);

	certificationList.appendChild(certificationContainer);
    
	certificateList.push({
		name: certificationName.textContent,
		issuingOrganization: certificationAuthority.textContent,
		certificationDate: certificationDate.textContent,		
	})

	form_certifications.reset();

	certificationIndex++;
});

let btnCert = document.getElementById('certsubmit');

btnCert.addEventListener('click', e => {
	e.preventDefault(); 

	let resume = JSON.parse(localStorage.getItem('ResumeInfo'))
	console.log('passed cert' , resume.result.id)

	certificateList.map((item)=>{
		item.ResumeId = resume.result.id;
		createCert(item)
	   });
})

////////////////////////////////////////////////////////////////////////////////////////////////////

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

form_1_next_btn.addEventListener("click", function () {
	form_1.style.display = "none";
	form_2.style.display = "block";

	form_1_btns.style.display = "none";
	form_2_btns.style.display = "flex";

	form_2_progessbar.classList.add("active");
});

form_2_back_btn.addEventListener("click", function () {
	form_1.style.display = "block";
	form_2.style.display = "none";

	form_1_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_2_progessbar.classList.remove("active");
});

form_2_next_btn.addEventListener("click", function () {
	form_2.style.display = "none";
	form_3.style.display = "block";

	form_3_btns.style.display = "flex";
	form_2_btns.style.display = "none";

	form_3_progessbar.classList.add("active");
});

form_3_back_btn.addEventListener("click", function () {
	form_2.style.display = "block";
	form_3.style.display = "none";

	form_2_btns.style.display = "flex";
	form_3_btns.style.display = "none";

	form_3_progessbar.classList.remove("active");
});

form_3_next_btn.addEventListener("click", function () {
	form_3.style.display = "none";
	form_4.style.display = "block";

	form_4_btns.style.display = "flex";
	form_3_btns.style.display = "none";

	form_4_progessbar.classList.add("active");
});

form_4_back_btn.addEventListener("click", function () {
	form_3.style.display = "block";
	form_4.style.display = "none";
	console.log('clicked')

	form_3_btns.style.display = "flex";
	form_4_btns.style.display = "none";

	form_4_progessbar.classList.remove("active");
});

form_4_next_btn.addEventListener("click", function () {
	form_4.style.display = "none";
	form_5.style.display = "block";

	form_5_btns.style.display = "flex";
	form_4_btns.style.display = "none";

	form_5_progessbar.classList.add("active");
});


form_5_back_btn.addEventListener("click", function () {
	form_4.style.display = "block";
	form_5.style.display = "none";

	form_5_btns.style.display = "none";
	form_4_btns.style.display = "flex";

	form_5_progessbar.classList.remove("active");
});

btn_done.addEventListener("click", function () {
	modal_wrapper.classList.add("active");
})

shadow.addEventListener("click", function () {
	modal_wrapper.classList.remove("active");
})

// let obj = JSON.parse(localStorage.getItem("obj"));
// console.log("gets here", obj);
// console.log(obj.result.id);
// let id = obj.result.id

// let userInfo = JSON.parse(localStorage.getItem('UserInfo'))
// console.log("person Id:",userInfo.result.id)
// fetchUser(userInfo.result.id)

// let personInfo = JSON.parse(localStorage.getItem('UserInfo'))
// console.log("person info", fetchPerson)
// fetchUser(localStorage.getItem(personInfo.reult["UserId"]))

// const generateResume = document.querySelector("#template")
// if(generateResume){


let btnGenerate = document.getElementById('generate');

btnGenerate.addEventListener('click', e => {
	e.preventDefault(); 

		// Redirect to the generated CV page

		// Reload the redirected page automatically
		window.onload = function() {
			location.reload();
		}

		window.location.href = './../CV_generated/index.html';
})

