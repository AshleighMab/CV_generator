// import {LogInUser} from './../apis/login.js'

// const loginform = document.querySelector("#login")

// if(loginform){
//     loginform.addEventListener('submit',e=>{
//         e.preventDefault();
//         const loginData={
//                 userNameOrEmailAddress: document.querySelector("#email").value,
//                 password: document.querySelector("#password").value,
//                 rememberClient: true
//         }
//         console.log("values ::",loginData)
//         let result = LogInUser(loginData)
//     })
// }


// import { LogInUser } from './../apis/login.js'

// const loginform = document.querySelector("#login")

// if (loginform) {
//     loginform.addEventListener('submit', e => {
//         e.preventDefault();
//         const loginData = {
//             userNameOrEmailAddress: document.querySelector("#email").value,
//             password: document.querySelector("#password").value,
//             rememberClient: true
//         }
//         console.log("values ::", loginData)
//        LogInUser(loginData)
//             .then(response => {
//                 // if (response.userNameOrEmailAddress == userNameOrEmailAddress && response.password == password) {
//                 location.href = './../CV_template/index.html'
//                 // }
//             })
//             .catch(error => {
//                 console.error(error)
//                 alert('Wrong password or username')
//             });
//     })
// }

// import {LogInUser} from './../apis/login.js'

// const loginform = document.querySelector("#login")

// if (loginform) {
//     loginform.addEventListener('submit', e => {
//         e.preventDefault();
//         const loginData = {
//             userNameOrEmailAddress: document.querySelector("#email").value,
//             password: document.querySelector("#password").value,
//             rememberClient: true
//         }
//         console.log("values ::", loginData)

//         // Send a request to the server with the entered username and email combination
//         fetch('/check-username-email', {
//             method: 'POST',
//             body: JSON.stringify(loginData),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         .then(response => {
//             if (response.ok) {
//                 // If the response indicates success, redirect the user to the new page
//                 location.href = './../CV_template/index.html'
//             } else {
//                 // Otherwise, display an error message to the user
//                 throw new Error('Wrong password or username')
//             }
//         })
//         .catch(error => {
//             console.error(error)
//             alert(error.message)
//         });
//     })
// }

///CURRENT VERSION
// import {LogInUser} from './../apis/login.js'

// const loginform = document.querySelector("#login")

// if (loginform) {
//     loginform.addEventListener('submit', e => {
//         e.preventDefault();
//         const loginData = {
//             userNameOrEmailAddress: document.querySelector("#email").value,
//             password: document.querySelector("#password").value,
//             rememberClient: true
//         }
//         console.log("values ::", loginData)
//         LogInUser(loginData)
//             .then(response => {
//                 console.log("checking something");
//                 if (response.userNameOrEmailAddress == loginData.userNameOrEmailAddress && response.password == loginData.password) {
//                     console.log("checking condition");
                   
//                     location.href = './../CV_template/index.html'
//                 } 
//             })
//             .catch(error => {
//                 // console.error(error)
//                 alert(error.message)
//             });
//     })
// }

import {LogInUser} from './../apis/login.js'

const loginform = document.querySelector("#login")

if (loginform) {
    loginform.addEventListener('submit', e => {
        e.preventDefault();
        const loginData = {
            userNameOrEmailAddress: document.querySelector("#email").value,
            password: document.querySelector("#password").value,
            rememberClient: true
        }
        console.log("values ::", loginData)
        LogInUser(loginData)
            .then(response => {
                debugger
                console.log("respon",response)
                console.log("checking something");
                     location.href = './../CV_template/index.html'

                if (response.userNameOrEmailAddress == loginData.userNameOrEmailAddress && response.password == loginData.password) {
                    console.log("checking condition");

                    location.href = './../CV_template/index.html'
                } 
            })
            .catch(error => {
                // console.error(error)
                alert(error.message)
            });
    })
}
