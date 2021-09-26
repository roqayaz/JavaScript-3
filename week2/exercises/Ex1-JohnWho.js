/*------------------------------------------------------------------------------
Rewrite this function, but replace the callback syntax with the Promise syntax:
- Have the `getAnonName` function return a `new Promise`.
- If the Promise `resolves`, pass the full name as an argument to resolve with.
- If the Promise `rejects`, pass an error as the argument to reject with: "You 
  didn't pass in a first name!"
------------------------------------------------------------------------------*/

// const getAnonName = (firstName, callback) => {
//     setTimeout(() => {
//       if (!firstName)
//         return callback(new Error("You didn't pass in a first name!"));
  
//       const fullName = `${firstName} Doe`;
  
//       return callback(fullName);
//     }, 2000);
//   };
  
//   getAnonName('John', console.log);

//change the code above
  const getAnonName = firstName => {
      return new Promise((resolve, reject) => {
          setTimeout(() => {
            if(firstName){
                resolve(`${firstName} Doe`)  
              } else {
                  reject("You didn't pass in a first name!")
              }
          }, 2000)
      })
      
  }

  getAnonName('John').then(console.log);
  getAnonName('Roq').then(console.log);

  