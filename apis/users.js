import {getToken} from './../utils.js'
import {token_Key} from './../appConstants/index.js'

const token=getToken(token_Key);

function createUser(userDetails){
    console.log('fetching data')
      var requestOptions = {
        method: 'POST',
        headers: {
          'Authorization':`Bearer ${token}`,
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
        body: JSON.stringify(userDetails)
      };
      fetch("http://localhost:21021/api/services/app/User/Create", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('UserInfo', JSON.stringify(result))
            location.href = './../Login/index.html'          
        })
        .catch(error => alert('error', error));
        
        console.log('end of create user')
}


function fetchUser(name){
    console.log('fetching user')
      var requestOptions = {
        method: 'GET',
        headers: {
          'Authorization':`Bearer ${token}`,
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      }
      };
      fetch(`http://localhost:21021/api/services/app/User/Get?name=${name}`, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result)        
        })
        .catch(error => alert('error', error));
        
        console.log('end of fetch user')
}


export{fetchUser}
export {createUser}