import DataError from "../models/dataError.js"
import ErrorServices from "../services/errorServices.js"

// console.log("employeeValidation yüklendi...")

export default class EmployeeValidation{
    constructor(){
        this.errors = new ErrorServices()
    }
    checkEmployeeValidity(user){
        let requiredFields = "id firstName lastName age city salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if(!user[field]){
                hasErrors = true
                this.errors.add(new DataError(`Validation problem. ${field} is required`, user))
            }
        }
        if(Number.isNaN(Number.parseInt(+user.age))){
            hasErrors = true
            this.errors.add(new DataError(`Validation problem. ${user.age} is not a number`, user))
        }
        return hasErrors
    }
}