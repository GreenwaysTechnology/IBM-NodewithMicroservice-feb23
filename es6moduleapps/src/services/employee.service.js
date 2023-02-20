import { EMPLOYEES } from "../mock-data/employee-mock.js";

// export default class EmployeeService {
//     constructor() {

//     }
//     findAll() {
//         return 'list'
//     }
// }

class EmployeeService {
    constructor() {

    }
    findAll() {
        return EMPLOYEES
    }
}

export default EmployeeService;