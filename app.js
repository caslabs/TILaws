
//this just calls to aws path
let awsCallback = () => {
    //axios ftw
    axios.get('https://a3j3y9v7p8.execute-api.us-west-2.amazonaws.com/dev/info/learn')
    .then(function (response) {
      console.log(response.data.message);
      document.getElementById('txtVal').innerHTML = response.data.message;
    })
    .catch(function (error) {
      console.log(error);
    });
}

//new info on refresh
//awsCallback()
//new info on click
document.getElementById("btnComp").addEventListener("click", awsCallback);
