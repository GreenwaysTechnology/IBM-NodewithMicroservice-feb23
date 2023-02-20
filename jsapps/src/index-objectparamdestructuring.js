//object de structuring.
//passing object to the function as parameter.

//without de structuring
let displayEmployee = (employee) => {
    console.log(`id: ${employee.id}`)
    console.log(`Name ${employee.name}`)
    console.log(`City ${employee.city}`)
}
displayEmployee({ id: 1, name: 'subramanian', city: 'Coimbatore' })
//after destructuring
displayEmployee = (employee) => {
    //destructuring 
    const { id, name, city } = employee
    console.log(`id: ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
}
displayEmployee({ id: 1, name: 'subramanian', city: 'Coimbatore' })

displayEmployee = ({ id, name, city }) => {
    console.log(`id: ${id}`)
    console.log(`Name ${name}`)
    console.log(`City ${city}`)
}
displayEmployee({ id: 1, name: 'subramanian', city: 'Coimbatore' })
