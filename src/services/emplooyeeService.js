import { users } from "../data/users.js"
export default class EmployeeService{
    constructor(){
        this.employees = []
    }
    load(){
        for (const user of users) {
            if (user.type === "employee"){
                this.employees.push(user)
            }
        }
    }
    add(user){
        this.employees.push(user)
    }
    list(){
        return this.employees
    }
    getById(id){
        return this.employees.find(u => u.id === id)
    }
    getSorted(){
        return this.employees.sort((employee1,employee2) => {
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
    }
}