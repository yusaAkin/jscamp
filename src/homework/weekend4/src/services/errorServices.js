// console.log("erorServices yüklendi...")

export default class ErrorServices{
    constructor(){
        this.errors = []
    }
    show(){
        console.log("---Errors List---")
        console.log(this.errors)
    }
    add(err){
        this.errors.push(err)
        console.log(err)
    }
}