function createEducation(educationDetails){
    console.log('fetching data')
      var requestOptions = {
        method: 'POST',
        headers: {
          'Authorization':`Bearer ${token}`,
          'Accept': 'application/json, text/plain',
          'Content-Type': 'application/json;charset=UTF-8'
      },
        body: JSON.stringify(educationDetails)
      };
      fetch("http://localhost:21021/api/services/app/Education/Create", requestOptions)
        .then(response => response.json())
        .then(result => {
            localStorage.setItem('EducationInfo', JSON.stringify(result))          
        })
        .catch(error => alert('error', error));
        
        console.log('end of education creation')
}

export{createEducation}