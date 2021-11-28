import { users } from "../db/db.js"
import DataError from "../models/dataError.js"
import CustomerValidation from "../validation/customerValidation.js"
import EmployeeValidation from "../validation/employeeValidation.js"
import CustomerServices from "./customerServices.js"
import EmployeeServices from "./employeeServices.js"
import ErrorServices from "./errorServices.js"

// console.log("userServices yüklendi...")

export default class UserServices{
    constructor(){
        this.customerValidation = new CustomerValidation()
        this.employeeValidation = new EmployeeValidation()
        this.customers = new CustomerServices()
        this.employees = new EmployeeServices()
        this.errors = new ErrorServices()
    }
    load(){
        for (const user of users) {
            switch (user.type) {
                case "customer":
                    if(!this.customerValidation.checkCustomerValidity(user)){
                        this.customers.add(user)
                    }
                    break;
                case "employee":
                    if(!this.employeeValidation.checkEmployeeValidity(user)){
                        this.employees.add(user)
                    }
                    break;
                default:
                    this.errors.add(new DataError("Wrong user type", user))
                    break;
            }
        }
    }
    show(){
        this.customers.show()
        this.employees.show()
        this.errors.show()
    }
    add(user){
        switch (user.type) {
            case "customer":
                if(!this.customerValidation.checkCustomerValidity(user)){
                    this.customers.add(user)
                }
                break;
            case "employee":
                if(!this.employeeValidation.checkEmployeeValidity(user)){
                    this.employees.add(user)
                }
                break;
            default:
                this.errors.add(new DataError("Wrong user type", user))
                break;
        }
    }
    getById(id,type){
        switch (type) {
            case "customer":
                this.customers.getCustomerId(id)
                break;
            case "employee":
                this.employees.getEmployeeId(id)
                break;
            default:
                console.log("Wrong user type [customer/employee]")
                break;
        }
    }
    getSorted(type){
        switch (type) {
            case "customer":
                this.customers.getCustomerSorted()
                break;
            case "employee":
                this.employees.getEmployeesSorted()
                break;
            default:
                console.log("Wrong user type [customer/employee]")
                break;
        }
    }
}