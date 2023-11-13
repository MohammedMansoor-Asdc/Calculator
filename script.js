let display = document.getElementById('display')


function result(val) {
    display.value += val;
}

function clr() {
    display.value = ""
}

function calculateResult() {
    display.value = eval(display.value)
}

function _keyHandle(event){
    if (event == 'enter'){
        calculateResult()
    }
}

function deleteLast(){
    let currentResult = display.value
    display.value = currentResult.substring(0, currentResult.length -1)
}

let body = document.querySelector('body')
let toggleWrapper = document.querySelector('.toggleWrapper')
let toggleBtn = document.querySelector('.toggleBtn')

toggleBtn.addEventListener('click',()=>{
    body.classList.toggle('darkMode')
})