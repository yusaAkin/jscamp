function addToCart(quantity, productName = "Elma") {
    console.log("Sepete Eklendi : " + productName +
                " Adet: " + quantity)
}
// addToCart()
// addToCart(10)
// addToCart(15)

let sayHello = () => {
    console.log("Hello Word")
}
// sayHello()
let sayHello2 = function () {
    console.log("Hello Word2")
}
// sayHello2()

function AddToCart2(productName, quantity, unitPrice) {
    
}
// AddToCart2("Elma",5,10)
// AddToCart2("Armut",5,15)

let product1 = {
    productName : "Elma", quantity : 5, unitPrice : 10
}
function AddToCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}
// AddToCart3(product1)

let product2 = {
    productName : "Elma", quantity : 5, unitPrice : 10
}
let product3 = {
    productName : "Elma", quantity : 5, unitPrice : 10
}
product2 = product3
product2.productName = "KARPUZ"
// console.log(product3.productName)
// Objeler ve arrayler referans tiptir

function addToCart4(products) {
    console.log(products)
}
let products = [
    {productName : "Elma", quantity : 5, unitPrice : 10},
    {productName : "Armut", quantity : 5, unitPrice : 10},
    {productName : "Karpuz", quantity : 5, unitPrice : 10}
]
// addToCart4(products)

function add(bisey,...numbers) { //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        // console.log(numbers[i])
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}
// add(20,30)
// add(20,30,40)
// add(20,30,40,50)
let numbers = [30,616,650,984,321,1]
// console.log(...numbers)
// console.log(Math.max(...numbers))

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]
// console.log(icAnadolu.population)
// console.log(marmara.name)
// console.log(icAnadoluSehirleri)
let newProductName, newUnitPrice, newQuantity 
({productName:newProductName, quantity:newQuantity, unitPrice:newUnitPrice}
= {productName : "Elma", quantity : 5, unitPrice : 10})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
