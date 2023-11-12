const addBtn = document.querySelector(".add")
const subBtn = document.querySelector(".sub")
const num = document.querySelector(".output")
const resetNumber = document.querySelector(".reset")

let output = 0

const add =()=>{
    output = output+1
    num.innerHTML = output
    
}

const subtract =()=>{
    output = output-1
    num.innerHTML = output

    
}

const reset=()=>{
    output = 0
    num.innerHTML = output

    
}

addBtn.addEventListener('click',add)
subBtn.addEventListener('click',subtract)
resetNumber.addEventListener('click',reset)

