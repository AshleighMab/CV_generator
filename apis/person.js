import {getToken} from './../utils.js'
import {token_Key} from './../appConstants/index.js'

const token=getToken(token_Key);

function createPerson(personDetails){
    console.log('getting data')
      var requestOptions = {
        method: 'POST',
        headers: {
          'Authorization':`Bearer ${token}`,
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
        body: JSON.stringify(personDetails)
      };
      fetch("http://localhost:21021/api/services/app/User/Create", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('UserInfo', JSON.stringify(result))
            location.href = './../CV_template/index.html'
            
        })
        .catch(error => alert('error', error));
        
        console.log('end of create user')
}

// function fetchUser(Id){
//     console.log('fetching user')
//       var requestOptions = {
//         method: 'GET',
//         headers: {
//           'Authorization':`Bearer ${token}`,
//           'Accept': 'application/json, text/plain',
//           'Content-Type': 'application/json;charset=UTF-8'
//       }
//       };
//       fetch(`http://localhost:21021/api/services/app/User/Get?Id=${Id}`, requestOptions)
//         .then(response => response.json())
//         .then(result => {
//             console.log(result)
            
//         })
//         .catch(error => alert('error', error));
        
//         console.log('end of create user')
// }
// export{fetchUser}
// export {createUser}
