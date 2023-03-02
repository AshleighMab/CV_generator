import {getToken} from './../utils.js'
import {token_Key} from './../appConstants/index.js'

const token=getToken(token_Key);


async function LogInUser(loginDetails){
    let requestOption = {
        method: 'POST',
        headers: {
            //'Authantication': `Bearer ${token}`,
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(loginDetails)
    }
    await fetch("http://localhost:21021/api/TokenAuth/Authenticate", requestOption)
    .then(response => response.json())
    .then(result => {
        localStorage.setItem('loginDetails', JSON.stringify(result))
 
        
    })
    .catch(error => alert("error", error));

}

export{LogInUser}