//style the body
document.body.setAttribute('style', 'background-color: #E8F6EF');

//create and styled div container 
const container = document.createElement('div');
document.body.appendChild(container);
container.setAttribute('style', 'width: 60%; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); padding: 10px; height: 60%; text-align: center; ');

//create and styled wrap div
const wrap = document.createElement('div');
container.appendChild(wrap); 
wrap.setAttribute('style', 'display: flex; justify-content: space-evenly')

//create and styled button  
const btn = document.createElement('button');
btn.textContent = 'Get Pokemon!';
btn.setAttribute('style', 'background-color: #FFB319; font-size: 2rem; cursor: pointer; padding: 10px; border: solid #FFB319; color: #334756; font-weight: bold; font-family: Times; height: 20%');
wrap.appendChild(btn);

//create and styled the select tag
const select = document.createElement('select');
const opt = document.createElement('option');
opt.value = "0";
opt.text = "Pokemon Name";
select.add(opt, null);
wrap.appendChild(select);
select.setAttribute('style', 'background-color: #FFB319; border: solid #FFB319; color: #334756; font-weight: bold; font-family: Times; font-size: 2rem; padding: 10px; height: 20%; cursor: pointer ');

//create and styled the img tag
const img = document.createElement('img');
img.src = "pokemon.jpg";
container.appendChild(img);
img.setAttribute('style', 'width: 400px;height: 400px; object-fit: cover; margin-top: 80px; border: none');




