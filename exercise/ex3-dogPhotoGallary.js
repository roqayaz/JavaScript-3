const URL = 'https://dog.ceo/api/breeds/image/random';
const xmlBtn = document.getElementById('xmlBtn');
const axiosBtn = document.getElementById('axiosBtn');
const ulElm = document.getElementById('list');
const imgSize = '300px';
ulElm.style.display = 'flex';
ulElm.style.flexWrap = 'wrap';

xmlBtn.addEventListener('click',requestWithXHR);
axiosBtn.addEventListener('click',requestWithAxios);


function requestWithXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', URL, true);
  xhr.send();

  // 4. This will be called after the response is received
  xhr.onload = function() {
    if (xhr.status != 200 && xhr.status != 200) {
      // analyze HTTP status of the response
      console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else {
      // show the result
      const response = JSON.parse(xhr.responseText);
      const liElm = document.createElement('li');
      const imgElm = document.createElement('img');
      imgElm.style.height = imgSize;
      liElm.style.listStyle = 'none';
      imgElm.setAttribute('style', 'float: left; width: 400px;height: 300px; object-fit: cover;')
      imgElm.src = response.message;
      imgElm.style.height = imgSize;
      liElm.style.listStyle = 'none';
      liElm.appendChild(imgElm);
      ulElm.appendChild(liElm);
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
  };
}



function requestWithAxios(){
  axios.get(URL)
  .then(function (response) {
    // handle success
    const liElm = document.createElement('li');
    const imgElm = document.createElement('img');
    imgElm.setAttribute('style', 'float: right; width: 400px;height: 300px; object-fit: cover;')
    imgElm.src = response.data.message;
    imgElm.style.height = imgSize;
    liElm.style.listStyle = 'none';
    liElm.appendChild(imgElm);
    ulElm.appendChild(liElm);
  })
  .catch(function (error) {
    // handle error
    console.log("Request failed");
  })
  .then(function () {
    // always executed
  });
};