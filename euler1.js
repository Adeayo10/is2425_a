// Assessment 04/10/2024

const sumOfMultiplesOfAOrB = (a, b, l) => 
    l.filter(number => number % a === 0 || number % b === 0)
     .reduce((sum, num) => sum + num, 0);

const sumOfMultiplesOfElementsOfA = (a, l) => 
    l.filter(num => num % a[0] === 0 || num % a[1] === 0)
     .reduce((sum, num) => sum + num, 0);

const sumOfMultiplesOfElementsOfAList = (a, l) => 
    l.filter(num => a.some(divisor => num % divisor === 0))
     .reduce((sum, num) => sum + num, 0);

const sumOfMultiplesOfThreeAndFiveBelowHundred = () => {
    let sum = 0;
    for (let i = 0; i < 100; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};
const sumOfMultiples = (a, b, n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % a === 0 || i % b === 0) {
            sum += i;
        }
    }
    return sum;
};


const calculateSum = () => {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const l = document.getElementById('l').value.split(',').map(num => parseInt(num));

    console.log(a, b, l);

    if (isNaN(a) || isNaN(b) || l.length === 0) {
        alert('Please enter valid numbers');
        return;
    }

    hideCalculateButton('calculateButton');

    const sum = sumOfMultiplesOfAOrB(a, b, l);
    displayResult(sum, a, b, l, 'form1');
};

const calculateSumOfElementsOfA = () => {
    const a = document.getElementById('a1').value.split(',').map(num => parseInt(num));
    const l = document.getElementById('l1').value.split(',').map(num => parseInt(num));
    console.log(a, l);

    if (a.length !== 2 || l.length === 0) {
        alert('Please enter valid numbers');
        return;
    }

    hideCalculateButton('calculateButtonElement');

    const sum = sumOfMultiplesOfElementsOfA(a, l);
    displayResult(sum, a, null, l, 'form2');
}
const calculateSumOfElementsOfAList = () => {
    const a = document.getElementById('a3').value.split(',').map(num => parseInt(num));
    const l = document.getElementById('l3').value.split(',').map(num => parseInt(num));
    console.log(a, l);

    if (a.length === 0 || l.length === 0) {
        alert('Please enter valid numbers');
        return;
    }

    hideCalculateButton('calculateButtonElementList');

    const sum = sumOfMultiplesOfElementsOfAList(a, l);
    displayResult(sum, a, null, l, 'form3');
};




const displayResult = (sum, a, b, l,formid) => {
    createParagraphToDisplayResult(formid);
    styleResult();

    document.getElementById('result').style.display = 'block';
    document.getElementById('result').innerHTML = 
        `The sum of all multiples of ${a} and ${b} below [${l}] is ${sum}.`;
};

const createParagraphToDisplayResult = (formId) => {
const resultParagraph = document.createElement('p');
resultParagraph.id = 'result';
document.getElementById(formId).appendChild(resultParagraph);

};

const styleResult = () => {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule('#result {color: blue; font-size: 20px;}', 0);
    styleSheet.insertRule('#result {background-color: lightgray;}', 0);
    styleSheet.insertRule('#result {padding: 10px;}', 0);
    styleSheet.insertRule('#result {border-radius: 5px;}', 0);
};

const hideCalculateButton = (buttonId) => {
    document.getElementById(buttonId).style.display = 'none';
};
