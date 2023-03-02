import {createUser} from './../apis/users.js'
import {token_Key} from './../appConstants/index.js'
import {setToken} from './../utils.js'

let name = document.getElementById('firstname');
let surm = document.getElementById('surname');
let email = document.getElementById('emailaddress');
let password = document.getElementById('password');
//let confirmPassW = document.getElementById('confirmPassW');

let signUpButton = document.getElementById('signUpButton');

setToken(token_Key,"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6ImQ3N2RkMGVhLTNlMmQtZjhjNS1mODAzLTNhMDlhOWEyYmU4NyIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwic3ViIjoiMSIsImp0aSI6Ijc5MDcyNjAwLTkwZGYtNGZkOS1hYWU5LWZmMTIwNWEzNmQzYiIsImlhdCI6MTY3NzYwMTgzMywibmJmIjoxNjc3NjAxODMzLCJleHAiOjE2Nzc2ODgyMzMsImlzcyI6IlJlc3VtZUdlbmVyYXRvciIsImF1ZCI6IlJlc3VtZUdlbmVyYXRvciJ9.o8YXsH5tBe8kRnVDPJebhF54lpE0ezmztVOB74fhSmA");
console.log(name.value);

signUpButton.addEventListener('click', e=>{
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

