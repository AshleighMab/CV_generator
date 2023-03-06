import {getToken} from './../utils.js'
import {token_Key} from './../appConstants/index.js'

const token=getToken(token_Key);

function createResume(resumeDetails){
    console.log('fetching data')
      var requestOptions = {
        method: 'POST',
        headers: {
          'Authorization':`Bearer ${token}`,
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
        body: JSON.stringify(resumeDetails)
      };
      fetch("http://localhost:21021/api/services/app/Resume/CreateResume", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('ResumeInfo', JSON.stringify(result))         
        })
        .catch(error => alert('error', error));
        
        console.log('end of resume creation')
}




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generateResume(){
  console.log('fetching data')
    // var requestOptions = {
    //   method: 'POST',
    //   headers: {
    //     'Authorization':`Bearer ${token}`,
    //     'Accept': 'application/json, text/plain',
    //     'Content-Type': 'application/json;charset=UTF-8'
    // },
    //   body: JSON.stringify(resumeDetails)
    // };
    fetch("http://localhost:21021/api/services/app/Resume/GetResumeById")
      .then(response => response.json())
      .then(result => {
          localStorage.setItem('ResumeInfo', JSON.stringify(result))         
      })
      .catch(error => alert('error', error));
      
      console.log('end of resume creation')
}

export{createResume}

