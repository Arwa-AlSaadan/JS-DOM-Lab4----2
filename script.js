

let display = document.getElementById("display")
let price = document.getElementById("price")
let tax = document.getElementById("taxBtn")

let result = document.getElementById("result")
let numPerson = document.getElementById("numPerson")
let divideBtn = document.getElementById("divideBtn")


tax.addEventListener("click", ()=>{
    price = price.value
    price = price*15/100
    display.innerText= "Tax is "+ price+"SR"
})

divideBtn.addEventListener("click",()=>{
    let price = document.getElementById("price")
    price = price.value
    let tax = price*15/100
    let newPrice = price
    let numPerson = document.getElementById("numPerson")
    let forEach =  parseInt(newPrice)+parseInt(tax) 
    forEach = forEach/numPerson.value
    result.innerText= "Each person should be pay : "+ forEach
})


