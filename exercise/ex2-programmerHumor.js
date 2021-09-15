const url = 'https://xkcd.now.sh/?comic=latest';
const container = document.getElementById('container');
container.style.display = 'flex';
container.style.justifyContent = 'space-around';
document.body.style.backgroundColor = '#ffd166'

function requestWithXHR(url){
const xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.send();

// This will be called after the response is received
xhr.onload = function() {
  if (xhr.status != 200 && xhr.status != 200) { // analyze HTTP status of the response
    console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    const response = JSON.parse(xhr.responseText);
    const img1 = document.createElement('img');
    img1.style.border = 'thick solid #d62828';
    container.appendChild(img1);

    console.log(response);
    img1.src = response.img;
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
  console.log("Request failed");
};
};

function requestWithAxios(URL){
  axios.get(url)
  .then(function (response) {
    // handle success
    const img2 = document.createElement('img');
    container.appendChild(img2);
    img2.style.border = 'thick solid #0f4c5c';
    console.log(response.data);
    img2.src = response.data.img;
  })
  .catch(function (error) {
    // handle error
    console.log("Request failed");
  })
  .then(function () {
    // always executed
  });

};

requestWithXHR(url);
requestWithAxios(url);