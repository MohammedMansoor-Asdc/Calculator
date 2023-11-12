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
    if (event.keycode == 13){
        calculateResult()
    }
}

function deleteLast(){
    let currentResult = display.value
    display.value = currentResult.substring(0, currentResult.length -1)
}
