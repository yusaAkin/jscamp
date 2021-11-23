import EmplooyeeService from "../services/emplooyeeService.js"
import CustomerService from "../services/customerService.js"
import User from "../models/user.js"

let customer = new CustomerService()
let employee = new EmplooyeeService()
let user1 = new User(7,"Yuşa","Akın","İstanbul","25","customer")
let user2 = new User(8,"Mücahid","Akın","İstanbul","21","employee")

customer.load()
console.log("-----Customer----")
customer.add(user1)
console.log(customer.list())
console.log(customer.getById(1))
console.log(customer.getSorted())

employee.load()
console.log("-----Employee----")
employee.add(user2)
console.log(employee.list())
console.log(employee.getById(3))
console.log(employee.getSorted())