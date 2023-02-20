//objects : constructor pattern using functions - es 5
function Employee() {
    //instance variables
    this.id = 1;
    this.name = 'Subramanian'
    //instance methods
    this.calculateSalary = function() {
        return 1000
    }
}
//let is keyword 
//employee is reference variable
//new is keyword 
//Employee() => constructor call
let employee = new Employee();
console.log(`id ${employee.id} name ${employee.name} Salary ${employee.calculateSalary()}`)
