import DataError from "../models/dataError.js"
import ErrorServices from "../services/errorServices.js"

// console.log("customerValidation yüklendi...")

export default class CustomerValidation{
    constructor(){
        this.errors = new ErrorServices()
    }
    checkCustomerValidity(user){
        let requiredFields = "id firstName lastName age city creditCartNumber".split(" ")
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