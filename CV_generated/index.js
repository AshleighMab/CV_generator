import { fetchUser } from "../apis/users.js";

// let userInfo = JSON.parse(localStorage.getItem('UserInfo'))
// // console.log(userInfo.result.id)

let personInfo = JSON.parse(localStorage.getItem('UserInfo'))
console.log("user Id:",personInfo.result.id)
fetchUser(personInfo.result.id)

function addingName(){
  fetchUser(userInfo);
  return userInfo.result.id;
}

// fetchUser(userInfo.result.id)
const nameplaceholder = document.querySelector(".nameplaceholder");
nameplaceholder.innerHTML=addingName();

