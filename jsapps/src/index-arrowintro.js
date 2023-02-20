//arrow functions

//es 5 style of anonmous functions 
let hai = function (name = '', message = '') {
    console.log(`${message} ${name}`)
}
hai('Subramanian', 'hai')
//es 6 style of writing arrow functions 
let hello = (name = '', message = '') => {
    console.log(`${message} ${name}`)
}
hello('Subramanian', 'Hello')
