

import { fetchUser } from "../apis/users";

let userInfo = JSON.parse(localStorage.getItem('UserInfo'))
console.log(userInfo.result.id)


  function addingName(){
    fetchUser(userInfo);
    return userInfo.result.Name;
}

// fetchUser(userInfo.result.id)
const nameplaceholder = document.querySelector(".nameplaceholder");
nameplaceholder.innerHTML=addingName();