document.body.setAttribute('style', 'background-color: #E8F6EF');

const container = document.createElement('div');
document.body.appendChild(container);
container.setAttribute('style', 'width: 60%; position: absolute; top: 50%; left: 50%; -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); padding: 10px; height: 50%; text-align: center; display: flex; justify-content: space-around');

const btn = document.createElement('button');
btn.textContent = 'Get Pokemon!';
btn.setAttribute('style', 'background-color: #FFB319; font-size: 2rem; cursor: pointer; padding: 10px; border: solid #FFB319; color: #334756; font-weight: bold; font-family: Times; height: 20%');
container.appendChild(btn);

const select = document.createElement('select');
const opt = document.createElement('option');
opt.value = "0";
opt.text = "Pokemon Name";
select.add(opt, null);
container.appendChild(select);
select.setAttribute('style', 'background-color: #FFB319; border: solid #FFB319; color: #334756; font-weight: bold; font-family: Times; font-size: 2rem; padding: 10px; height: 20%; cursor: pointer ');


