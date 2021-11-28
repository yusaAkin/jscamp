import User from "./user.js";

export default class Customer extends User{
    constructor(id, firstName, lastName, city, age, creditCartNumber){
        super(id, firstName, lastName, city, age)
        this.creditCartNumber = creditCartNumber
    }
}