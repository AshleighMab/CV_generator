import { fetchUser } from "../apis/users.js";
import { createPerson } from './../apis/person.js'
import { token_Key } from './../appConstants/index.js'
import { setToken } from './../utils.js'
import { fetchPerson } from "./../apis/person.js"
import {createEducation} from "./../apis/education.js"
import { createResume } from "./../apis/resume.js";
import { createSection } from "./../apis/section.js";
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

setToken(token_Key, "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImQ3N2RkMGVhLTNlMmQtZjhjNS1mODAzLTNhMDlhOWEyYmU4NyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6IjJlOWNmZjdhLTU2MGYtNDVhMy1hMjc5LWM1YmViNzI3OTNkYSIsImlhdCI6MTY3ODAxMDQ3NywibmJmIjoxNjc4MDEwNDc3LCJleHAiOjE2NzgwOTY4NzcsImlzcyI6IlJlc3VtZUdlbmVyYXRvciIsImF1ZCI6IlJlc3VtZUdlbmVyYXRvciJ9.afDf4-rQFPemn2HbC7afPdBRbPN8tltomGGjyD5EbSk");


btnpersonalDetails.addEventListener('click', e => {
	e.preventDefault();

	const persondata = {
		title: title.value,
		dateOfBirth: dob.value,
		gender: gender.value,
		race: race.value,
		identificationNumber: idnum.value,
		cellNumber: cellphone.value,
		address: address.value,
		userId: localStorage.getItem("UserId"),
	}

	console.log("values ::", persondata)
	createPerson(persondata)
	console.log(persondata.userId);

})
////////////////////////////////////////////////////////////////////////////////////////////////////
let createResumeBtn = document.getElementById('createResumeBtn');


createResumeBtn.addEventListener('click', e => {
	e.preventDefault(); 

	let personInfo = JSON.parse(localStorage.getItem('UserInfo'))
	console.log('passed' , personInfo.result.id)

	const resumedata ={	
		name: "Name",
		personId:  personInfo.result.id
	}
	console.log("Resume details ::", resumedata)
    createResume(resumedata)

	
	let sectionInfo = JSON.parse(localStorage.getItem('ResumeInfo'))
	console.log('passed' , sectionInfo.result.id)

	const Sectiondata ={	

		title: 1,
		resumeId: sectionInfo.result.id,
	}
	console.log("Section details ::", Sectiondata)
    createSection(Sectiondata)
})

//////////////////////////////////////////////////////////////////////////////////////////////
let schoolname = document.getElementById('schoolname');
let degree = document.getElementById('degree');
let major = document.getElementById('major');
let enddate = document.getElementById('end-date');


let btnEducation = document.getElementById('eddu_submit');

btnEducation.addEventListener('click', e => {
	e.preventDefault(); 

	let sectionInfo = JSON.parse(localStorage.getItem('SectionInfo'))
	console.log('passed edu' , sectionInfo.result.id)

	const educationdata = {
		
			degree: degree.value,
			schoolName: schoolname.value,
			graduationDate: enddate.value,
			major: major.value,
			sectionId: sectionInfo.result.id,
			
		  
	}
	console.log("education values ::", educationdata)
	createEducation(educationdata)
	console.log(educationdata.sectionId);

})


/////////////////////////////////////////////////////////////////////////////////////////////////
let companyname = document.getElementById('company-name');
let position = document.getElementById('position');
let startdate = document.getElementById('start-date');
let workenddate = document.getElementById('work-end-date');


let btnWork = document.getElementById('worksubmit');

btnWork.addEventListener('click', e => {
	e.preventDefault(); 

	let sectionInfo = JSON.parse(localStorage.getItem('SectionInfo'))
	console.log('passed edu' , sectionInfo.result.id)

	const workdata = {
		title: position.value,
        companyName: companyname.value,
	    startDate: startdate.value,
	    endDate: workenddate.value,
        sectionId: sectionInfo.result.id,
					  
	}
	console.log("work values ::", workdata)
	createWork(workdata)
	console.log(workdata.sectionId);

})

////////////////////////////////////////////////////////////////////////////////////////////////////
let skillname = document.getElementById('skill-name');
let skilllevel = document.getElementById('skill-level');

let btnSkill = document.getElementById('skillsubmit');

btnSkill.addEventListener('click', e => {
	e.preventDefault(); 

	let sectionInfo = JSON.parse(localStorage.getItem('SectionInfo'))
	console.log('passed edu' , sectionInfo.result.id)

	const skilldata = {
			name: skillname.value,
			proficiencyLevel: skilllevel.value,
			sectionId:  sectionInfo.result.id,					  
	}
	console.log("skill values ::", skilldata)
	createSkill(skilldata)
	console.log(skilldata.sectionId);

})

////////////////////////////////////////////////////////////////////////////////////////////////////
let certname = document.getElementById('certification-name');
let certorg = document.getElementById('certification-authority');
let certdate = document.getElementById('certification-date');

let btnCert = document.getElementById('certsubmit');

btnCert.addEventListener('click', e => {
	e.preventDefault(); 

	let sectionInfo = JSON.parse(localStorage.getItem('SectionInfo'))
	console.log('passed cert' , sectionInfo.result.id)

	const certdata = {
		name: certname.value,
		issuingOrganization: certorg.value,
		certificationDate: certdate.value,
	    sectionId: sectionInfo.result.id,					  
	}
	console.log("cert values ::", certdata)
	createCert(certdata)
	console.log(certdata.sectionId);

})

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Adding and removing education entries
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

	const major = document.createElement("p");
	major.textContent = `Major: ${form_education["major"].value}`;
	educationContainer.appendChild(major);

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

//Adding and removing certification entries
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