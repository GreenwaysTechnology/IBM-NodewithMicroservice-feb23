//literal pattern
let employee = {
    id: 1,
    name: 'Subramanian',
    calculateSalary: function () {
        return 100
    }
}
console.log(`id ${employee.id} name ${employee.name} Salary ${employee.calculateSalary()}`)

//es 6 way of declaraing methods
employee = {
    id: 1,
    name: 'Subramanian',
    calculateSalary() {
        return 100
    }
}
console.log(`id ${employee.id} name ${employee.name} Salary ${employee.calculateSalary()}`)