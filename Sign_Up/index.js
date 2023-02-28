import {createUser} from './../apis/users.js';
import {token_Key} from './../appConstants/index.js'
import {setToken} from './../utilis.js'
let email = document.getElementById('emailInput');
let password = document.getElementById('passwordInput');
//let confirmPassword = document.getElementById('confirmInput');
let signUpButton = document.getElementById('signUpButton');