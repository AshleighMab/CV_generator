



let personInfo = JSON.parse(localStorage.getItem('UserInfo'))

console.log("user name:",personInfo.result.firstName)

let userName = document.getElementById('userName')

let nameX = personInfo.result.firstName

userName.innerHTML = nameX

