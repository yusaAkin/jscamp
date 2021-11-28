// console.log("employeeServices yüklendi...")

export default class EmployeeServices{
    constructor(){
        this.employees = []
    }
    show(){
        console.log("---Employees List---")
        console.log(this.employees)
    }
    add(user){
        this.employees.push(user)
    }
    getEmployeeId(id){
        console.log("---Employees Get Id---")
        console.log(this.employees.find(u => u.id === id))
    }
    getEmployeesSorted(){
        console.log("---Employees Sorted---")
        console.log(
            this.employees.sort((employee1,employee2) => {
                if (employee1.firstName > employee2.firstName) {
                    return 1
                }
                else if (employee1.firstName === employee2.firstName) {
                    return 0
                }
                else {
                    return -1
                }
            })
        )
    }
}