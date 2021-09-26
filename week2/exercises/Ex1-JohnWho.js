// const getAnonName = (firstName, callback) => {
//     setTimeout(() => {
//       if (!firstName)
//         return callback(new Error("You didn't pass in a first name!"));
  
//       const fullName = `${firstName} Doe`;
  
//       return callback(fullName);
//     }, 2000);
//   };
  
//   getAnonName('John', console.log);

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

  