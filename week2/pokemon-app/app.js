const main = () => {
//style the body
document.body.setAttribute('style', 'background-color: #E8F6EF');
//create and styled h1
const header = document.createElement('h2');
document.body.appendChild(header);
header.textContent = 'Click the Button to get the Pokemon list 🤩';
header.setAttribute('style', 'text-align: center; padding: 20px; color: #334756')

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
btn.setAttribute('style', 'background-color: #FFB319; font-size: 1.8rem; cursor: pointer; padding: 10px; border: solid #FFB319; color: #334756; font-weight: bold; font-family: Times; height: 20%');
wrap.appendChild(btn);

//create and styled the select tag
const selectList = document.createElement('select');
const opt = document.createElement('option');
opt.disabled = true;
opt.selected = true;
opt.textContent = "Pokemon Name";
selectList.add(opt, null);
wrap.appendChild(selectList);
selectList.setAttribute('style', 'background-color: #FFB319; border: solid #FFB319; color: #334756; font-weight: bold; font-family: Times; font-size: 1.8rem; padding: 10px; height: 20%; cursor: pointer; ');

//create and styled the img tag
const img = document.createElement('img');
img.src = "pokemon.jpg";
container.appendChild(img);
img.setAttribute('style', 'width: 400px;height: 400px; object-fit: cover; margin-top: 50px; border: none');


const url = 'https://pokeapi.co/api/v2/pokemon/';

//add event listener
btn.addEventListener('click', () => {
    fetchAndPopulatePokemon(url, selectList);
    selectList.addEventListener('change', () => {
        fetchImage(url+selectList.value, img);
      });
    });
};


//fetch data
async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  }


  async function fetchAndPopulatePokemon(url, selectList) {
    try {
      const data = await fetchData(url);
      data.results.forEach(({name}) => {
        const pokemonListItem = document.createElement('option');
        pokemonListItem.textContent = name;
        selectList.appendChild(pokemonListItem)
      });
    } catch (err) {
      console.log(err.message)
    }
};

//fetch image
async function fetchImage(url, img) {
    try{
      const data = await fetchData(url);
      img.src = data.sprites.front_default;
    }catch(err){
      console.log(err.message)
    }
  };

  window.onload = main;

   