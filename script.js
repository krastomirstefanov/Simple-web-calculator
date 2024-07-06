const firstNumInput = document.getElementById('firstNum');
const secondNumInput = document.getElementById('secondNum');
const resultBtn = document.getElementById('resultBtn'); 
const clearBtn = document.getElementById('clear');

const updateButtonState = () => {
    resultBtn.disabled = firstNumInput.value === '' || secondNumInput.value === '';
};

firstNumInput.addEventListener('input', updateButtonState);
secondNumInput.addEventListener('input', updateButtonState);

resultBtn.addEventListener('click', () => {
    const firstNum = firstNumInput.value;
    const secondNum = secondNumInput.value;
    const operator = document.getElementById('operator').value;
    let result = 0; 
    
    if(firstNum.value !== '' && secondNum.value !== '') {
        
        resultBtn.disabled = false;
    }
    
    switch (operator) {
        case '+':
            result = +firstNum + +secondNum;
            break;
        case '-':
            result = +firstNum - +secondNum;
            break;
        case '*':
            result = +firstNum * +secondNum;
            break;
        case '/':
            result = +firstNum / +secondNum;
            break;
        default:
            break;
    }

 

    document.getElementById('result').innerText = `The result is ${result}`;
})


clearBtn.addEventListener('click',() => {
    firstNumInput.value = '';
    secondNumInput.value = '';
    document.getElementById('result').innerText = '';
    updateButtonState();
})

