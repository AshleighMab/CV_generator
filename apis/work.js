import {getToken} from './../utils.js'
import {token_Key} from './../appConstants/index.js'

const token=getToken(token_Key);

function createWork(workDetails){
    console.log('fetching data')
      var requestOptions = {
        method: 'POST',
        headers: {
          'Authorization':`Bearer ${token}`,
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
        body: JSON.stringify(workDetails)
      };
      fetch("http://localhost:21021/api/services/app/WorkExperience/Create", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('workInfo', JSON.stringify(result))          
        })
        .catch(error => alert('error', error));
        
        console.log('end of work creation')
}

export{createWork}