import { fetchResume } from "../apis/resume.js";

let resumeInfo = JSON.parse(localStorage.getItem('ResumeInfo'))
fetchResume(resumeInfo.result.id);


console.log("im  education", resumeInfo.result.education)
console.log("im  work", resumeInfo.result.workExperience)
console.log("im  skills", resumeInfo.result.skill)
console.log("im  certifications", resumeInfo.result.certification)

let eduArray = [];
let workArray = [];
let skillArray = [];
let certArray = [];

eduArray = resumeInfo.result.education;
skillArray = resumeInfo.result.skill;
workArray = resumeInfo.result.workExperience;
certArray = resumeInfo.result.certification;

///////////////////////////////////////////////////////////////////////////
//Personal details

let userName = document.getElementById('name')
let nameX = resumeInfo.result.person.firstName
userName.innerHTML = nameX

let aboutname = document.getElementById('aboutname')
let aboutnameX = resumeInfo.result.person.firstName
aboutname.innerHTML = aboutnameX

let surname = document.getElementById('surname')
let surnameX = resumeInfo.result.person.surname
surname.innerHTML = surnameX


let gender = document.getElementById('gender')
let genderX = resumeInfo.result.person.genderText
gender.innerHTML = genderX

let dob = document.getElementById('dob')
let dobX = resumeInfo.result.person.dateOfBirth
dob.innerHTML = dobX.substring(0,10)

let email = document.getElementById('email')
let emailX = resumeInfo.result.person.emailAddress
email.innerHTML = emailX

let race = document.getElementById('race')
let raceX = resumeInfo.result.person.raceText
race.innerHTML = raceX

let address = document.getElementById('address')
let addressX = resumeInfo.result.person.address
address.innerHTML = addressX

let cellphone = document.getElementById('cellphone')
let cellphoneX = resumeInfo.result.person.cellNumber
cellphone.innerHTML = cellphoneX

let id = document.getElementById('idnum')
let idX = resumeInfo.result.person.identificationNumber
id.innerHTML = idX


let title = document.getElementById('title')
let titleX = resumeInfo.result.person.titleText
title.innerHTML = titleX



///////////////////////////////////////////////////////////////////////////
//Education details
const eduSection = document.getElementById('education-card');

for(let i=0; i<eduArray.length; i++) {
  let eduCard = document.createElement('article');
  eduCard.classList.add('card');

  let year = document.createElement('p');
  year.innerHTML = `Graduation Date: ${eduArray[i].graduationDate.substring(0,10)}`;
  eduCard.appendChild(year);

  let schoolname = document.createElement('p');
  schoolname.innerHTML = `School Name : ${eduArray[i].schoolName}`;
  eduCard.appendChild(schoolname);

  let major = document.createElement('p');
  major.innerHTML = `Major : ${eduArray[i].major}`;
  eduCard.appendChild(major);

  let degree = document.createElement('p');
  degree.innerHTML = `Degree : ${eduArray[i].degree}`;
  eduCard.appendChild(degree);

  eduSection.appendChild(eduCard);
}

///////////////////////////////////////////////////////////////////////////
//Work details
const workSection = document.getElementById('work-experience-card');

for(let i=0; i<workArray.length; i++) {
  let workCard = document.createElement('article');
  workCard.classList.add('card');

  let companyName = document.createElement('p');
  companyName.innerHTML = `Company Name : ${workArray[i].companyName}`;
  workCard.appendChild(companyName);

  let position = document.createElement('p');
  position.innerHTML = `Title : ${workArray[i].title}`;
  workCard.appendChild(position);

  let startDate = document.createElement('p');
  startDate.innerHTML = `Start Date : ${workArray[i].startDate.substring(0,10)}`;
  workCard.appendChild(startDate);

  let endDate = document.createElement('p');
  endDate.innerHTML = `End Date : ${workArray[i].endDate.substring(0,10)}`;
  workCard.appendChild(endDate);

  workSection.appendChild(workCard);
}

///////////////////////////////////////////////////////////////////////////
//Skill details

const skillsSection = document.getElementById('skills-card');

for(let i=0; i<skillArray.length; i++) {
  let skillCard = document.createElement('article');
  skillCard.classList.add('card');

  let skillName = document.createElement('p');
  skillName.innerHTML = `Skill name : ${skillArray[i].name}`;
  skillCard.appendChild(skillName);

  let level = document.createElement('p');
  level.innerHTML = `Proficiency Level : ${skillArray[i].proficiencyLevel}`;
  skillCard.appendChild(level);

  skillsSection.appendChild(skillCard);
}

///////////////////////////////////////////////////////////////////////////
//Certification details

const certSection = document.getElementById('certifications-card');

for(let i=0; i<certArray.length; i++) {
  let certCard = document.createElement('article');
  certCard.classList.add('card');

  let certName = document.createElement('p');
  certName.innerHTML = `Certification Name : ${certArray[i].name}`;
  certCard.appendChild(certName);

  let issuingOrg = document.createElement('p');
  issuingOrg.innerHTML = `Issuing Organization : ${certArray[i].issuingOrganization}`;
  certCard.appendChild(issuingOrg);
 
  let certDate = document.createElement('p');
  certDate.innerHTML = `Certification Date : ${certArray[i].certificationDate.substring(0,10)}`;
  certCard.appendChild(certDate);

  certSection.appendChild(certCard)
}