"use strict";
//create element
function main() {
const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);

const header = document.createElement('section');
header.setAttribute('id', 'header');
container.appendChild(header);

const repo = document.createElement('div');
repo.classList.add('repo');
header.appendChild(repo);

const h1 = document.createElement('h1');
h1.textContent = 'HYF Repositories';
repo.appendChild(h1);

const select = document.createElement('select');
select.classList.add('select');
repo.appendChild(select);

const option = document.createElement('option');
select.appendChild(option);
option.textContent = '-- Choose an Option --';

const img = document.createElement('img');
img.src = 'h.png';
header.appendChild(img);

const part = document.createElement('div');
part.classList.add('part')
container.appendChild(part);

const details = document.createElement('section');
details.classList.add('details');
part.appendChild(details);

const contributors = document.createElement('section');
contributors.classList.add('contributors');
part.appendChild(contributors);

const footer = document.createElement('footer');
footer.innerHTML = 'Made with <span id="heart">❤</span> by Roqayaz';
document.body.appendChild(footer);

fetchRepository(select, details, contributors);
}

window.onload = main;

//fetch select repo

const url = 'https://api.github.com/orgs/HackYourFuture/repos?per_page=100';

function fetchRepository(select, details, contributors) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.forEach(item => {
            const option = document.createElement('option');
            select.appendChild(option);
          option.value = item.name;
          option.textContent = item.name;
          
  
        })
  
        showInfo(data, select, details, contributors);
      })
      .catch(error => {
        const errorEl = document.createElement('h4');
        errorEl.setAttribute('style', 'background-color: #4a707a;width: 400px; height: 100px;padding: 15px;position: absolute;top: 50%;left: 50%;margin: -70px 0 0 -200px; color: white; font-family: "Space Mono", monospace; text-align: center ');
        errorEl.textContent = `network request failed ! "${error.message}"`;
        document.body.appendChild(errorEl);
      });
  };

  function showInfo(data, select, details, contributors) {
    select.addEventListener('change', () => {
      contributors.innerHTML = '';
      details.innerHTML = '';
      data.forEach(item => {
        if (item.name == select.value) {
            details.style.display = 'block';
            const h31 = document.createElement('h3');
h31.textContent = "Repository: ";
details.appendChild(h31);
const repository = document.createElement('span');
repository.setAttribute('id', 'repository');
h31.appendChild(repository);

const h32 = document.createElement('h3');
h32.textContent = "Description: ";
details.appendChild(h32);
const description = document.createElement('span');
description.setAttribute('id', 'description');
h32.appendChild(description);

const h33 = document.createElement('h3');
h33.textContent = "Forks: ";
details.appendChild(h33);
const forks = document.createElement('span');
forks.setAttribute('id', 'forks');
h33.appendChild(forks);

const h34 = document.createElement('h3');
h34.textContent = "Updated: ";
details.appendChild(h34);
const updated = document.createElement('span');
updated.setAttribute('id', 'updated');
h34.appendChild(updated);
          repository.textContent = item.name;
          description.textContent = item.description;
          forks.textContent = item.forks;
          updated.textContent = item.updated_at;
  
          const url = item.contributors_url;
          fetchContributor(url, contributors);
        }
      })
    })
  };


  function fetchContributor(url, contributors) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const h35 = document.createElement('h3');
        h35.textContent = 'Contributors';
        contributors.appendChild(h35);
        
        data.forEach(item => {
            
          contributors.style.display = 'block';
          
          const contItem = document.createElement('div');
          const div2 = document.createElement('div');
          const profileImg = document.createElement('img');
          const profileName = document.createElement('h4');
          const numberOfContribution = document.createElement('h4');
          
          numberOfContribution.setAttribute('style', 'background: #4a707a; color: #212121; width: 10%; margin-bottom: 10px; border-radius: 50px')
  
          contItem.appendChild(profileImg);
          contItem.appendChild(div2);
          div2.appendChild(profileName);
          div2.appendChild(numberOfContribution);
          

          contItem.setAttribute('style', 'background-color: #d4dfe5; margin-left: 20px; margin-right: 20px; padding-top: 20px');
          contributors.appendChild(contItem);
         div2.classList.add('div2');
  
          profileImg.src = item.avatar_url;
          
          profileImg.setAttribute('style', 'width: 80px; border-radius: 50px; padding-bottom: 30px');
         
          profileName.textContent = item.login;
          numberOfContribution.textContent = item.contributions;
          
  
          
        })
  
      })
      .catch(function (error) {
        const errorEl = document.createElement('h3');
        errorEl.setAttribute('style', 'background-color: coral; color: white; display: block; padding = 10px');
        errorEl.textContent = `network request failed ! "${error.message}"`;
        document.body.appendChild(errorEl);
      });
  }
  
  