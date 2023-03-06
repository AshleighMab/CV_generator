
let personInfo = JSON.parse(localStorage.getItem('UserInfo'))

console.log("user name:",personInfo.result.firstName)

let userName = document.getElementById('name')
let nameX = personInfo.result.firstName
userName.innerHTML = nameX

let surname = document.getElementById('surname')
let surnameX = personInfo.result.surname
surname.innerHTML = surnameX

let email = document.getElementById('email')
let emailX = personInfo.result.emailAddress
email.innerHTML = emailX

let cellphone = document.getElementById('cellphone')
let cellphoneX = personInfo.result.cellNumber
cellphone.innerHTML = cellphoneX


let gender = document.getElementById('gender')
let genderX = personInfo.result.genderText
gender.innerHTML = genderX

// let userName = document.getElementById('userName')
// let nameX = personInfo.result.firstName
// userName.innerHTML = nameX

let educationInfo = JSON.parse(localStorage.getItem('UserInfo'))

console.log("user name:",personInfo.result.firstName)
