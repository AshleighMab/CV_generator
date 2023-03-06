import {getToken} from './../utils.js'
import {token_Key} from './../appConstants/index.js'

const token=getToken(token_Key);

function createSection(sectionDetails){
    console.log('creating data')
      var requestOptions = {
        method: 'POST',
        headers: {
          'Authorization':`Bearer ${token}`,
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
        body: JSON.stringify(sectionDetails)
      };
      fetch("http://localhost:21021/api/services/app/Section/CreateSection", requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.success){
            localStorage.setItem('SectionInfo', JSON.stringify(result))   
          }else{
            alert('Error Occurred!');
          }      
        })
        .catch(error => alert('error', error));
        
        console.log('end of section creation')
}

export{createSection}