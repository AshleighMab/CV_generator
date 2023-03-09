import {getToken} from './../utils.js'
import {token_Key} from './../appConstants/index.js'

const token=getToken(token_Key);

function createPerson(personDetails){
    console.log('getting data')
      var requestOptions = {
        method: 'POST',
        body: personDetails
      };
      fetch("http://localhost:21021/api/services/app/Person/CreatePerson", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('UserInfo', JSON.stringify(result))          
        })
        .catch(error => alert('error', error));
        
        console.log('end of create person')
}

function fetchPerson(id){
  let response;
  console.log('fetching user')
    var requestOptions = {
      method: 'GET',
      headers: {
        'Authorization':`Bearer ${token}`,
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json;charset=UTF-8'
    }
    };
    fetch(`http://localhost:21021​/api/services/app/Person/GetPersonByUserId=id${id}`, requestOptions)
      .then(response => response.json())
      .then(result => {
          console.log(result)        
      }).finally((data)=>{
        response = data
      })
      .catch(error => alert('error', error));
      
      console.log('end of fetch user')
      return response;
}

export{createPerson}
export{fetchPerson}
