import {LogInUser} from './../apis/login.js'

const loginform = document.querySelector("#login")


if(loginform){
    loginform.addEventListener('submit',e=>{
        e.preventDefault();
        const loginData={
                userNameOrEmailAddress: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
                rememberClient: true
        }
        console.log("values ::",loginData)
        let result = LogInUser(loginData)
    })
}


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
//                     location.href = './../CV_template/index.html'
//                 // }
//             })
//             .catch(error => {
//                 console.error(error)
//                 alert('Wrong password or username')
//             });
//     })
// }