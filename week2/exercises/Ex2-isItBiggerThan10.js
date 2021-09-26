const checkDoubleDigits = num => {
    return new Promise((resolve, reject) => {
        if (num > 10){
            resolve("The number is bigger than 10!")
        } else {
            reject("Error! The number is smaller than 10...")
        }
    })
}

checkDoubleDigits(12).then(console.log);
checkDoubleDigits(6).then(console.log);