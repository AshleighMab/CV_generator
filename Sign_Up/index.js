import {createUser} from './../apis/users.js'
import {token_Key} from './../appConstants/index.js'
import {setToken} from './../utils.js'


let name = document.getElementById('firstname');
let surm = document.getElementById('surname');
let email = document.getElementById('emailaddress');
let password = document.getElementById('password');
let confirmPassW = document.getElementById('confirmPassW');

let signUpButton = document.getElementById('signUpButton');

setToken(token_Key,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjBiMmIxNGUyLWJmYTctZjNiNy0zMjRmLTNhMDljZTdjNTM0OCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6Ijk0Mzc1ZDQwLTcxNGMtNDBhZC04ZThiLWRmYjRkYzkzODAzMCIsImlhdCI6MTY3ODQyNzUzMiwibmJmIjoxNjc4NDI3NTMyLCJleHAiOjE2Nzg1MTM5MzIsImlzcyI6IlJlc3VtZUdlbmVyYXRvciIsImF1ZCI6IlJlc3VtZUdlbmVyYXRvciJ9.EM6V7YyWPVPcCpIQhcX-q7tSqW3q8hlrYMbOdiwi2Z4");


signUpButton.addEventListener('click', e=>{
    e.preventDefault();

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
