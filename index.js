const addBtn = document.querySelector(".add")
const subBtn = document.querySelector(".sub")
const num = document.querySelector(".output")
const resetNumber = document.querySelector(".reset")

let count = 0

const add =()=>{
    count = count+1
    num.innerHTML = output 
}

const subtract =()=>{
    count = count-1
    num.innerHTML = count
}

const reset=()=>{
    count = 0
    num.innerHTML = count
}

addBtn.addEventListener('click',add)
subBtn.addEventListener('click',subtract)
resetNumber.addEventListener('click',reset)

