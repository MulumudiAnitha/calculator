let Operator='';
let firstNumber='';
let secondNumber='';
function appendnumber(num){
    if(Operator === ''){
        firstNumber+=num;
        document.getElementById('result').value=firstNumber;
    }
    else{
        secondNumber+=num;
        document.getElementById('result').value=secondNumber;
    }
}
    function SetOperator(op)
    {
    Operator=op;
    }
    function calculate()
    {
        let result;
        switch(Operator){
            case'+':
            result=parseInt(firstNumber) + parseInt(secondNumber);
            break;
            case'-':
            result=parseInt(firstNumber) - parseInt(secondNumber);
            break;
            case'*':
            result=parseInt(firstNumber) * parseInt(secondNumber);
            break;
            case'/':
            result=parseInt(firstNumber) / parseInt(secondNumber);
            break;
        }
        document.getElementById('result').value=result;
    }
    function clearResult(){
        Operator ='';
    firstNumber='';
    secondNumber='';
    document.getElementById('result').value = '';
}
