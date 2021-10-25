"use strict";
//create element 
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

const img = document.createElement('img');
img.src = 'h.png';
header.appendChild(img);

const part = document.createElement('div');
part.classList.add('part')
container.appendChild(part);

const details = document.createElement('section');
details.classList.add('details');
part.appendChild(details);

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

const contributors = document.createElement('section');
contributors.classList.add('contributors');
part.appendChild(contributors);

const h35 = document.createElement('h3');
h35.textContent = 'Contributors';
contributors.appendChild(h35);

const footer = document.createElement('footer');
footer.innerHTML = 'Made with <span id="heart">❤</span> by Roqayaz';
document.body.appendChild(footer);


