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

let personInfo = JSON.parse(localStorage.getItem('UserInfo'))
	console.log('passed' , personInfo.result.id)
fetchResume(personInfo.result.id);

let resumeInfo = JSON.parse(localStorage.getItem('ResumeInfo'))

console.log("user name:",resumeInfo.result.firstName)

let userName = document.getElementById('name')
let nameX = resumeInfo.result[0].person.firstName
userName.innerHTML = nameX

let aboutname = document.getElementById('aboutname')
let aboutnameX = resumeInfo.result[0].person.firstName
aboutname.innerHTML = aboutnameX

let	surname = document.getElementById('surname')
let surnameX = resumeInfo.result[0].person.surname
surname.innerHTML = surnameX


let gender = document.getElementById('gender')
let genderX = resumeInfo.result[0].person.genderText
gender.innerHTML = genderX

let	dob = document.getElementById('dob')
let dobX = resumeInfo.result[0].person.dateOfBirth
dob.innerHTML = dobX

let email = document.getElementById('email')
let emailX = resumeInfo.result[0].person.emailAddress
email.innerHTML = emailX

let race = document.getElementById('race')
let raceX = resumeInfo.result[0].person.raceText
race.innerHTML = raceX

let address = document.getElementById('address')
let addressX = resumeInfo.result[0].person.address
address.innerHTML = addressX

let cellphone = document.getElementById('cellphone')
let cellphoneX = resumeInfo.result[0].person.cellNumber
cellphone.innerHTML = cellphoneX

let id = document.getElementById('idnum')
let idX = resumeInfo.result[0].person.identificationNumber
id.innerHTML = idX


let title = document.getElementById('title')
let titleX = resumeInfo.result[0].person.titleText
title.innerHTML = titleX

let year = document.getElementById('edu_year')
let yearX = resumeInfo.result[0].sections[0].education.graduationDate
year.innerHTML = yearX