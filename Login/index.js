import {LogInUser} from './../apis/login.js'
const loginform = document.querySelector("#login")

const LoginPage = async (Loginform)=>{
    let counter  = 0
    if (Loginform) {
        Loginform.addEventListener('submit', async e => {
            e.preventDefault();
            const loginData = {
                userNameOrEmailAddress: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
                rememberClient: true
            }
            const response = LogInUser(loginData)
            .then(response => {
                console.log("respon",response)
            }).then((response)=>{
               console.log("Appp",response)
            }).finally(()=>{
                if (localStorage.getItem("AccessToken") !=null) {
                    console.log("InsideIF",localStorage.getItem("AccessToken"))
                    location.href = './../CV_template/index.html'
                } 
            })
            .catch(error => {
                alert(error.message)
            });
        })
    }
}
await LoginPage(loginform)
