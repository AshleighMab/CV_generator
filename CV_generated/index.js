import { fetchResume } from "../apis/resume.js";

// let personInfo = JSON.parse(localStorage.getItem('UserInfo'))

// console.log("user name:",personInfo.result.firstName)

// let userName = document.getElementById('name')
// let nameX = personInfo.result.firstName
// userName.innerHTML = nameX

// let surname = document.getElementById('surname')
// let surnameX = personInfo.result.surname
// surname.innerHTML = surnameX

// let email = document.getElementById('email')
// let emailX = personInfo.result.emailAddress
// email.innerHTML = emailX

// let cellphone = document.getElementById('cellphone')
// let cellphoneX = personInfo.result.cellNumber
// cellphone.innerHTML = cellphoneX


// let gender = document.getElementById('gender')
// let genderX = personInfo.result.genderText
// gender.innerHTML = genderX

// let userName = document.getElementById('userName')
// let nameX = personInfo.result.firstName
// userName.innerHTML = nameX

// let educationInfo = JSON.parse(localStorage.getItem('UserInfo'))

// console.log("user name:",personInfo.result.firstName)
let resumeInfo = JSON.parse(localStorage.getItem('ResumeInfo'))
// let personInfo = JSON.parse(localStorage.getItem('UserInfo'))
//	console.log('passed' , personInfo.result.id)
fetchResume(resumeInfo.result.id);

// console.log("user name:",resumeInfo.result.firstName)
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
dob.innerHTML = dobX

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




// let degree = document.getElementById('degree')
// let degreeX = resumeInfo.result.education[0].degree
// degree.innerHTML = degreeX


// let major = document.getElementById('major')
// let majorX = resumeInfo.result.education[0].major
// major.innerHTML = majorX

// for(let i=0; i<eduArray.length;i++){
//     console.log("iam itme", eduArray[i])

//     let year = document.getElementById('edu_year')
//     year.innerHTML = eduArray[i].graduationDate;
//     let schoolname = document.getElementById('schoolname')
//     schoolname.innerHTML = eduArray[i].schoolName;
//     let major = document.getElementById('major') 
//     major.innerHTML= eduArray[i].major
//     let degree = document.getElementById('degree') 
//     degree.innerHTML = eduArray[i].degree
// }

///////////////////////////////////////////////////////////////////////
//education
// for(let i=0; i<eduArray.length; i++) {
//   let eduCard = document.createElement('article');
//   eduCard.classList.add('card');
  
//   let year = document.createElement('p');
//   year.innerHTML = eduArray[i].graduationDate;
//   eduCard.appendChild(year);
  
//   let schoolname = document.createElement('p');
//   schoolname.innerHTML = eduArray[i].schoolName;
//   eduCard.appendChild(schoolname);
  
//   let major = document.createElement('p');
//   major.innerHTML = eduArray[i].major;
//   eduCard.appendChild(major);
  
//   let degree = document.createElement('p');
//   degree.innerHTML = eduArray[i].degree;
//   eduCard.appendChild(degree);
  
//   document.body.appendChild(eduCard);
// }

// //////////////////////////////////////////
// //workExperience

// for(let i=0; i<workArray.length; i++) {
//     let workCard = document.createElement('article');
//     workCard.classList.add('card');
    
//     let companyName = document.createElement('p');
//     companyName.innerHTML = workArray[i].companyName;
//     workCard.appendChild(companyName);
    
//     let position = document.createElement('p');
//     position.innerHTML = workArray[i].position;
//     workCard.appendChild(position);
    
//     let startDate = document.createElement('p');
//     startDate.innerHTML = workArray[i].startDate;
//     workCard.appendChild(startDate);
    
//     let endDate = document.createElement('p');
//     endDate.innerHTML = workArray[i].endDate;
//     workCard.appendChild(endDate);
    
//     document.body.appendChild(workCard);
//   }
  
//   //////////////////////////////////////////
// //skills
// for(let i=0; i<skillArray.length; i++) {
//     let skillCard = document.createElement('article');
//     skillCard.classList.add('card');
    
//     let skillName = document.createElement('p');
//     skillName.innerHTML = skillArray[i].name;
//     skillCard.appendChild(skillName);
    
//     let level = document.createElement('p');
//     level.innerHTML = skillArray[i].proficiencyLevel;
//     skillCard.appendChild(level);

    
//     document.body.appendChild(skillCard);
//   }

// //////////////////////////////////////////
// //certifications
// for(let i=0; i<certArray.length; i++) {
//     let certCard = document.createElement('article');
//     certCard.classList.add('card');
    
//     let companyName = document.createElement('p');
//     companyName.innerHTML = certArray[i].name;
//     certCard.appendChild(companyName);
    
//     let position = document.createElement('p');
//     position.innerHTML = certArray[i].issuingOrganization;
//     certCard.appendChild(position);
    
//     let startDate = document.createElement('p');
//     startDate.innerHTML = certArray[i].certificationDate;
//     certCard.appendChild(startDate);
        
//     document.body.appendChild(certCard);
//   }

/////new code testing /////////////
const eduSection = document.getElementById('education');
const workSection = document.getElementById('work-experience');
const skillsSection = document.getElementById('skills');
const certSection = document.getElementById('certifications');

for(let i=0; i<eduArray.length; i++) {
  let eduCard = document.createElement('article');
  eduCard.classList.add('card');

  let year = document.createElement('p');
  year.innerHTML = eduArray[i].graduationDate;
  eduCard.appendChild(year);

  let schoolname = document.createElement('p');
  schoolname.innerHTML = eduArray[i].schoolName;
  eduCard.appendChild(schoolname);

  let major = document.createElement('p');
  major.innerHTML = eduArray[i].major;
  eduCard.appendChild(major);

  let degree = document.createElement('p');
  degree.innerHTML = eduArray[i].degree;
  eduCard.appendChild(degree);

  eduSection.appendChild(eduCard);
}

for(let i=0; i<workArray.length; i++) {
  let workCard = document.createElement('article');
  workCard.classList.add('card');

  let companyName = document.createElement('p');
  companyName.innerHTML = workArray[i].companyName;
  workCard.appendChild(companyName);

  let position = document.createElement('p');
  position.innerHTML = workArray[i].position;
  workCard.appendChild(position);

  let startDate = document.createElement('p');
  startDate.innerHTML = workArray[i].startDate;
  workCard.appendChild(startDate);

  let endDate = document.createElement('p');
  endDate.innerHTML = workArray[i].endDate;
  workCard.appendChild(endDate);

  workSection.appendChild(workCard);
}

for(let i=0; i<skillArray.length; i++) {
  let skillCard = document.createElement('article');
  skillCard.classList.add('card');

  let skillName = document.createElement('p');
  skillName.innerHTML = skillArray[i].name;
  skillCard.appendChild(skillName);

  let level = document.createElement('p');
  level.innerHTML = skillArray[i].proficiencyLevel;
  skillCard.appendChild(level);

  skillsSection.appendChild(skillCard);
}

for(let i=0; i<certArray.length; i++) {
  let certCard = document.createElement('article');
  certCard.classList.add('card');

  let certName = document.createElement('p');
  certName.innerHTML = certArray[i].name;
  certCard.appendChild(certName);

  let issuingOrg = document.createElement('p');
  issuingOrg.innerHTML = certArray[i].issuingOrganization;
  certCard.appendChild(issuingOrg);
 
  certSection.appendChild(certCard)
}