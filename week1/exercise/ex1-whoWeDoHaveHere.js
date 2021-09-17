const url = 'https://www.randomuser.me/api';

const requestWithXHR = (url) => 
{// 1. Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL /article/.../load
xhr.open('GET', url);

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200) {
    // analyze HTTP status of the response
    console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else {
    // show the result
    console.log(xhr.response.length); // response is the server
  }
};

xhr.onprogress = function(event) {
  if (event.lengthComputable) {
    console.log(`Received ${event.loaded} of ${event.total} bytes`);
  } else {
    console.log(`Received ${event.loaded} bytes`); // no Content-Length
  }
};

xhr.onerror = function() {
  console.log('Request failed');
};}


const requestWithAxios = (url) => {
  const axios = require('axios'); // We have to load in the library first

  // Make a GET request to get user data from the Pokemon API
  axios
    .get(url)
    .then(function(response) {
      console.log(response.length);
      // Do something with data
    })
    .catch(function(error) {
      console.log('Request failed');
      // Do something with error
    });
}

requestWithAxios(url);
requestWithXHR(url);
