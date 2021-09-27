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
const selectList = document.createElement('select');
const opt = document.createElement('option');
opt.disabled = true;
opt.selected = true;

opt.textContent = "Pokemon Name";
selectList.add(opt, null);
wrap.appendChild(selectList);
selectList.setAttribute('style', 'background-color: #FFB319; border: solid #FFB319; color: #334756; font-weight: bold; font-family: Times; font-size: 2rem; padding: 10px; height: 20%; cursor: pointer; ');

//create and styled the img tag
const img = document.createElement('img');
img.src = "pokemon.jpg";
container.appendChild(img);
img.setAttribute('style', 'width: 400px;height: 400px; object-fit: cover; margin-top: 80px; border: none');


const url = 'https://pokeapi.co/api/v2/pokemon/';
async function fetchData(url) {
    // TODO complete this function
      const response = await fetch(url);
      const data = await response.json();
      return data;
  }

  async function fetchAndPopulatePokemon(url, selectList) {
    // TODO complete this function
    try {
      const data = await fetchData(url);
      /* this is just to make look better before the user select any Pokemon */
      
    
      data.results.forEach(({name}) => {
        const pokemonListItem = document.createElement('option');
        pokemonListItem.textContent = name;
        selectList.appendChild(pokemonListItem)
      });
    } catch (err) {
      console.log(err.message)
    }
}

async function fetchImage(url, img) {
    // TODO complete this function
    try{
      const data = await fetchData(url);
      img.src = data.sprites.front_default;
    }catch(err){
      console.log(err.message)
    }
  }


btn.addEventListener('click', () => {
    fetchAndPopulatePokemon(url, selectList);
    selectList.addEventListener('change', () => {
        fetchImage(url+selectList.value, img);
      });
    })