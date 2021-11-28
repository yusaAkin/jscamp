// console.log("customerServices yüklendi...")

export default class CustomerServices{
    constructor(){
        this.customers = []
    }
    show(){
        console.log("---Customers List---")
        console.log(this.customers)
    }
    add(user){
        this.customers.push(user)
    }
    getCustomerId(id){
        console.log("---Customers Get Id---")
        console.log(this.customers.find(u => u.id === id))
    }
    getCustomerSorted(){
        console.log("---Customers Sorted---")
        console.log(
            this.customers.sort((customer1,customer2) => {
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
        )
    }
}