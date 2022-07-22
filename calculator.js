const numberButton = document.querySelectorAll('.data-number');
const operationButton = document.querySelectorAll('.data-operation');
const clearAll = document.getElementById('data-delete');
const equalButton = document.getElementById('data-equal');
const preOperands = document.querySelector('.previous-operand');
const currOperands = document.querySelector('.current-operand');

class calucaltor {
    constructor(previousOperands,currentOperands){
        this.preOperands = preOperands;
        this.currOperands = currOperands;
        this.clear();
    }
}

clear() {
     this.currOperands = ''
     this.preOperands = ''
     
}

appendNumber(number){

}

chooseOperator(operation){

}

compute(){

}

updateDisplay (){

}