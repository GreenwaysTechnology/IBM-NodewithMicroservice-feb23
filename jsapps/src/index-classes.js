//es 6 style of constructors 

class Employee {
    //instance variables
    // id = 1
    // name = 'Subramanian'

    constructor(id=0, name='defaultName') {
        this.id = id;
        this.name = name
    }
    //instance methods
    calculateSalary() {
        return 1000
    }
}
let employee = new Employee()
console.log(`id ${employee.id} name ${employee.name} Salary ${employee.calculateSalary()}`)

employee = new Employee(23,'Ram')
console.log(`id ${employee.id} name ${employee.name} Salary ${employee.calculateSalary()}`)