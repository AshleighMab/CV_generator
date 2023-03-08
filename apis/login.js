import {getToken} from './../utils.js'
import {token_Key} from './../appConstants/index.js'
const token=getToken(token_Key);
let dataResults;
 const LogInUser = async (loginDetails) =>{
    let requestOption = {
        method: 'POST',
        headers: {
            //'Authantication': `Bearer ${token}`,
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(loginDetails)
    }
const response = await fetch('http://localhost:21021/api/TokenAuth/Authenticate', requestOption)
  .then(response => response.json())
  .then(data => { 'boruto', console.log(data)
    dataResults = data;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  })
  .finally( async () => {
    console.log("DataOutput",dataResults['result'])
    if(dataResults['result'] != null){
        await localStorage.setItem("AccessToken",dataResults['result']['accessToken'])
        await localStorage.setItem("UserId",dataResults['result']['userId'])
    }
    else
    {
        localStorage.clear()
        console.log("Hello");
    }
  });
  return response;
}
export{LogInUser}








