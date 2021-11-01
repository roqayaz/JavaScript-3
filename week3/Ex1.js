//Exercise A
// function getData(url) {
//     fetch(url)
//       .then(response => response.json)
//       .then(json => console.log(json))
//       .catch(error => console.log(error));
//   }
  
//   getData('https://randomfox.ca/floof/');

async function getData () {
    try {
    const fetchData = await fetch('https://randomfox.ca/floof/');
    const parseData = await fetchData.json();
    console.log(parseData);
} catch (error) {
    console.log('Oops, something went wrong!', error);
}
  }
  getData();

  // Exercise B
//   const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
  
//   const makeAllCaps = array => {
//     return new Promise((resolve, reject) => {
//       let capsArray = array.map(word => {
//         if (typeof word === 'string') {
//           return word.toUpperCase();
//         } else {
//           reject('Error: Not all items in the array are strings!');
//         }
//       });
//       resolve(capsArray);
//     });
//   };
  
//   makeAllCaps(arrayOfWords)
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

const arrayOfWords = ['cucumber', 'tomatoes', 'avocado'];

async function makeAllCaps(array) {
  try {
    let capsArray = await array.map(word => {
      if (typeof word === 'string') {
        return word.toUpperCase();
      } else {
        throw 'Error: Not all items in the array are strings!';
      }
    })
    console.log(capsArray);
  }
  catch(err) {
    console.log('Oops, something went wrong!', err);
  }
}

makeAllCaps(arrayOfWords)