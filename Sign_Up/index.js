// import {createUser} from './../apis/users.js'
// import {token_Key} from './../appConstants/index.js'
// import {setToken} from './../utils.js'

// let name = document.getElementById('firstname');
// let surm = document.getElementById('surname');
// let email = document.getElementById('emailaddress');
// let password = document.getElementById('password');
// //let confirmPassW = document.getElementById('confirmPassW');

// let signUpButton = document.getElementById('signUpButton');

// setToken(token_Key,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImQ3N2RkMGVhLTNlMmQtZjhjNS1mODAzLTNhMDlhOWEyYmU4NyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6ImI4YzkyN2QwLWJjYTMtNDA3Ni04Y2I4LTlkODMwYTM0NjAzZSIsImlhdCI6MTY3Nzc0Mjk0OSwibmJmIjoxNjc3NzQyOTQ5LCJleHAiOjE2Nzc4MjkzNDksImlzcyI6IlJlc3VtZUdlbmVyYXRvciIsImF1ZCI6IlJlc3VtZUdlbmVyYXRvciJ9.YxAMUaeBHIbrLX26PSe0fJ2pP9_f3wMrO5mp1Xgnvhc");
// console.log(name.value);

// signUpButton.addEventListener('click', e=>{
//     const signUpData={
//             userName: email.value,
//             name: name.value,
//             surname: surm.value,
//             emailAddress: email.value,
//             isActive: true,
//             password: password.value
//     }

//     console.log("values ::",signUpData)
//     createUser(signUpData)
// })

import {createUser} from './../apis/users.js'
import {token_Key} from './../appConstants/index.js'
import {setToken} from './../utils.js'


let name = document.getElementById('firstname');
let surm = document.getElementById('surname');
let email = document.getElementById('emailaddress');
let password = document.getElementById('password');
let confirmPassW = document.getElementById('confirmPassW');

let signUpButton = document.getElementById('signUpButton');

setToken(token_Key,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImQ3N2RkMGVhLTNlMmQtZjhjNS1mODAzLTNhMDlhOWEyYmU4NyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6ImM0YTVkMmY3LTE0MzctNDRmMC05OTdjLTMwNGUwYTEzZDdlNSIsImlhdCI6MTY3NzkyNjE0NCwibmJmIjoxNjc3OTI2MTQ0LCJleHAiOjE2NzgwMTI1NDQsImlzcyI6IlJlc3VtZUdlbmVyYXRvciIsImF1ZCI6IlJlc3VtZUdlbmVyYXRvciJ9.f9kUVJU2kkRP_K3U7IGIodOcv7nIrA7P-yAf0vgk_4Y");


signUpButton.addEventListener('click', e=>{
    e.preventDefault(); // prevent form submission
    
    // Check if password and confirmed password match
    if (password.value !== confirmPassW.value) {
        alert('Password and confirmed password do not match!');
        return;
    }
    
    const signUpData={
            userName: email.value,
            name: name.value,
            surname: surm.value,
            emailAddress: email.value,
            isActive: true,
            password: password.value
    }

    console.log("values ::",signUpData)
    createUser(signUpData)
})
