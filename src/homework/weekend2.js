// JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız.
// Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak asal olup olmadığını yazınız.
const findPrime = (...numbers) => {
    let primeNumber = []
    let notPrimeNumber = []
    numbers.map(number => {
        let counter = 0
        for (let i = 1; i <= number; i++) {
            if (number % i == 0) {
                counter++
            }        
        }
        if(counter == 2){
            primeNumber.push(number)
        }
        if(counter != 2){
            notPrimeNumber.push(number)
        }
    })
    primeNumber.map(pNumber => {
        console.log(pNumber + " : " + "Asal Sayıdır")
    })
    console.log("------------------------")
    notPrimeNumber.map(pNumber => {
        console.log(pNumber + " : " + "Asal Değildir")
    })
}
findPrime(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)

// Parametre olarak girilen iki sayının arkadaş sayılar olup olmadığını
// bulan programı yazınız.
const friendNumber = (number1,number2) => {
    let number1Total = 0
    let number2Total = 0
    for (let i = 0; i <= number1; i++) {
        if (number1 % i == 0) {
            number1Total += i
        }
    }
    for (let i = 0; i <= number2; i++) {
        if (number2 % i == 0) {
            number2Total += i
        }
    }
    if (number1Total == number2Total) {
        console.log(number1 + " ve " + number2 + " arkadaş sayılardır...")
    }
    else {
        console.log(number1 + " ve " + number2 + " arkadaş sayılar değildir...")
    }
}
friendNumber(220, 284)
friendNumber(5020, 5564)
friendNumber(220, 5020)

// 1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
const perfectNumber1000 = () => {
    let perfectNumber = []
    for (let i = 1; i <= 1000; i++) {
        let numberTotal = 0
        for (let j = 0; j < i; j++) {
            if (i % j == 0) {
                numberTotal += j
            }
        }
        if (numberTotal == i) {
            perfectNumber.push(i)
        }
    }
    perfectNumber.map(pNumber => {
        console.log(pNumber)
    })
}
perfectNumber1000()

// 1000'e kadarki tüm asal sayıları listeleyen programı yazınız
const primeNumber1000 = () => {
    let primeNumber = []
    for (let i = 2; i <= 1000; i++) {
        let counter = 0
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                counter++
            }    
        }
        if(counter == 2){
            primeNumber.push(i)
        }
    }
    primeNumber.map(pNumber => {
        console.log(pNumber)
    })
}
primeNumber1000()