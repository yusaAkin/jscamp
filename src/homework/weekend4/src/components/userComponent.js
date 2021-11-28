import Customer from "../models/customer.js"
import Employee from "../models/employee.js"
import User from "../models/user.js"
import UserServices from "../services/userServices.js"

// console.log("userComponents yüklendi...")

let userServices = new UserServices()

let user1 = new User(8, "Roberto", "Hongo", "Kamakura", 25)
let customerToAdd = new Customer(10, "Takeshi", "Sawada", "Osaka", 24, 1045)
customerToAdd.type = "customer"
let employeeToAdd = new Employee(9, "Ken", "Wakashimazu", "Tokyo", 27, 2700) 
employeeToAdd.type = "employee"

userServices.load()
userServices.add(user1)
userServices.add(customerToAdd)
userServices.add(employeeToAdd)
userServices.show()
// userServices.getById(5,"customer")
// userServices.getById(2,"employee")
// userServices.getSorted("customer")
// userServices.getSorted("employee")