import {getToken} from './../utils.js'
import {token_Key} from './../appConstants/index.js'

const token=getToken(token_Key);

function getAllResumes(){
    console.log('fetching all resume data')
      var requestOptions = {
        method: 'GET',
        headers: {
          'Authorization':`Bearer ${token}`,
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
      };
      fetch(`http://localhost:21021/api/services/app/Resume/GetAllResumes`, requestOptions)
        .then(response => response.json())
        .then(result => {         
          localStorage.setItem('AllResumeInfo', JSON.stringify(result))         
        })
        .catch(error => alert('error', error));
        
        console.log('End of all resume collection')
  }

  export{getAllResumes}