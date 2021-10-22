"use strict";
const placeholderRepos = [
    {
      name: 'SampleRepo1',
      description: 'This repository is meant to be a sample',
      forks: 5,
      updated: '2020-05-27 12:00:00',
    },
    {
      name: 'AndAnotherOne',
      description: 'Another sample repo! Can you believe it?',
      forks: 9,
      updated: '2020-05-27 12:00:00',
    },
    {
      name: 'HYF-Is-The-Best',
      description:
        "This repository contains all things HackYourFuture. That's because HYF is amazing!!!!",
      forks: 130,
      updated: '2020-05-27 12:00:00',
    },
  ];
  
   //grab the element
    const select = document.getElementById('select'); 
    const repository = document.getElementById('repository');
    const description = document.getElementById('description');
    const forks = document.getElementById('forks');
    const updated = document.getElementById('updated');
    const body = document.querySelector('.body');

 //main function
function main() {
for (let i = 0; i < select.length; i++) {

      if (select.value == placeholderRepos[i].name) {
        body.style.display = 'flex';
        repository.innerText = placeholderRepos[i].name;
        description.innerText = placeholderRepos[i].description;
        forks.innerText = placeholderRepos[i].forks;
        updated.innerText = placeholderRepos[i].updated;
      
    }
}
}

select.addEventListener('click', main)