//Grab the elements
const url = 'https://dog.ceo/api/breeds/image/random';
const xmlBtn = document.getElementById('xmlBtn');
const axiosBtn = document.getElementById('axiosBtn');
const ul = document.getElementById('ul');
ul.style.display = 'flex';
ul.style.justifyContent = 'space-around';

// XHR function
function requestWithXHR() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();

  // This will be called after the response is received
  xhr.onload = function() {
    if (xhr.status != 200 && xhr.status != 200) {
      // analyze HTTP status of the response
      console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
    } else {
      // show the result
      const response = JSON.parse(xhr.responseText);
      const li = document.createElement('li');
      const img = document.createElement('img');
      
      li.style.listStyle = 'none';
      img.setAttribute('style', ' width: 400px;height: 300px; object-fit: cover; margin-top: 15px  ')
      img.src = response.message;
      
      
      li.appendChild(img);
      ul.appendChild(li);
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

//axios function
function requestWithAxios(){
  axios.get(url)
  .then(function (response) {
    // handle success
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.setAttribute('style', 'width: 400px;height: 300px; object-fit: cover; margin-top: 15px ')
    img.src = response.data.message;
    li.style.listStyle = 'none';
    li.appendChild(img);
    ul.appendChild(li);
  })
  .catch(function (error) {
    // handle error
    console.log("Request failed");
  })
  .then(function () {
    // always executed
  });
};

//Event listener
xmlBtn.addEventListener('click',requestWithXHR);
axiosBtn.addEventListener('click',requestWithAxios);