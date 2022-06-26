
function getNumber(id) {
    checkResultBox()

    const number = document.getElementById(id).innerText

    const resultBox = document.getElementById('result')
    const resultBoxValue = resultBox.innerText + number
    resultBox.innerText = resultBoxValue

}

function getOperator(id){
    const operator = document.getElementById(id).innerText

    const resultBox = document.getElementById('result')
    const resultBoxValue = resultBox.innerText + operator
    resultBox.innerText = resultBoxValue
}

function showResult(){
    const resultBox = document.getElementById('result')

    const mathOperation = resultBox.innerText
    RESULT = eval(mathOperation);
    resultBox.innerText = resultBox.innerText + " = " + RESULT
}

function checkResultBox(){
    const resultBox = document.getElementById('result')

    const result = resultBox.innerText.split("=")
    
    if (result[1] !== undefined){
            resultBox.innerText = ''
        }
}