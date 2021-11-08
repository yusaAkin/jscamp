let sayi1 = 10
sayi1 = "Engin Demiroğ"
let student = {
    id:1, name:"Engin"
}
// console.log(student)

// function save(ogrenci, puan=10) {
//     console.log(ogrenci.name + " : " + puan)
// }
// save(student)

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
// save(undefined,student)

let students = ["Engin Demiroğ", "Halit Kalaycı", "Engin Toprak", "Büşra"]
// console.log(students)

let students2 = [student, {id:2,name:"Halit"},"Ankara",{city:"istanbul"}]
// console.log(students2)

// Rest, Spread, Destructure
// rest
// params c#
// varArgs java
// let showProducts = function (id,...products) {
//     console.log(id)
//     console.log(products[0][0])
// }
// console.log(typeof showProducts)
// showProducts(10,["Elma","Armut","Karpuz"])

// let showProducts = function (id,...products) {
//     console.log(id)
//     console.log(products)
// }
// console.log(typeof showProducts)
// showProducts(10,"Elma","Armut","Karpuz","Kavun")

// spread
let points = [1,2,3,4,50,60,14]
// console.log(typeof points)
// console.log(...points)
// console.log(Math.max(...points))
// console.log(..."ABC","D",..."EFG","H")

// Destructuring
let populations = [10000, 20000, 30000, [40000, 100000]]
// console.log(populations)
let [small, medium, high, [veryHigh, maximum]] = populations
// console.log(small)
// console.log(typeof small)
// console.log(medium)
// console.log(high)
// console.log(veryHigh)
// console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}
// someFunction(populations)

let category = {id:1,name:"İçecek"}
// console.log(category.id)
// console.log(category["name"])

let {id,name} = category
// console.log(id)
// console.log(name)

// OOP
class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}
let customer = new Customer(1,"12345")
// console.log(customer)
// Prototyping
customer.name = "Murat Kurtboğan"
// console.log(customer.name)

Customer.bisey = "Bişey"
// console.log(Customer.bisey)

// console.log(customer.customerNumber)

class IndividualCustomer extends Customer{
    constructor(firstName,id,customerNumber){
        super(id,customerNumber)
        this.firstName = firstName
    }
}
let customer2 = new IndividualCustomer("Yuşa",1,"Akın")
// console.log(customer2)
class CorporateCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.companyName = companyName
    }
}
let customer3 = new CorporateCustomer("Yuşa2",1,"Akın2")
// console.log(customer3)

// Map, Filter, Reduce
let products = [
    {id:1, name:"Acer Laptop", unitPrice:15000},
    {id:2, name:"Asus Laptop", unitPrice:16000},
    {id:3, name:"Hp Laptop", unitPrice:13000},
    {id:4, name:"Dell Laptop", unitPrice:12000},
    {id:5, name:"Casper Laptop", unitPrice:17000}
]
// console.log("<ul>")
// products.map(product=>console.log(`<li>${product.name}</li>`))
// console.log("</ul>")

// products.map(product => {
//     console.log(product)
//     console.log(`<li>${product.name}</li>`)
// })

let filteredProducts = products.filter(product => product.unitPrice>12000)
// console.log(filteredProducts)

let cartTotal = products.reduce((acc, product) => acc + product.unitPrice,0)
// console.log(cartTotal)

let cartTotal2 = products
                .filter(p=>p.unitPrice>13000)
                .map(p=>{
                    p.unitPrice = p.unitPrice*1.18
                    return p
                })
                .reduce((acc,p)=>acc+p.unitPrice,0)
// console.log(cartTotal2)