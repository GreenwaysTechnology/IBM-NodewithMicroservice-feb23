//main file 
// const profile = require('./mylib')
// console.log(profile)

// console.log(profile.firstName,profile.lastName)

const { firstName, lastName, address: { city }, salary, calcualte, isActive } = require('./mylib')

// console.log(firstName, lastName,address,calcualte(),isActive)

console.log(firstName, lastName, city, calcualte(), isActive,salary)