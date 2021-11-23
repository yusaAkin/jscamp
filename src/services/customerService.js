import { users } from "../data/users.js"
export default class CustomerService{
    constructor(){
        this.customer = []
    }
    load(){
        for (const user of users) {
            if (user.type === "customer"){
                this.customer.push(user)
            }
        }
    }
    add(user){
        this.customer.push(user)
    }
    list(){
        return this.customer
    }
    getById(id){
        return this.customer.find(u => u.id === id)
    }
    getSorted(){
        return this.customer.sort((customer1,customer2) => {
            if (customer1.firstName > customer2.firstName) {
                return 1
            }
            else if (customer1.firstName === customer2.firstName) {
                return 0
            }
            else {
                return -1
            }
        })
    }
}