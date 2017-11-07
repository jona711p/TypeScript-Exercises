function simpleMath() {
  let inputFirstNumberElem = <HTMLInputElement>document.getElementById("inputFirstNumber");
  let inputSecondNumberElem = <HTMLInputElement>document.getElementById("inputSecondNumber");

  let firstNumber: number = +inputFirstNumberElem.value;
  let secondNumber: number = +inputSecondNumberElem.value;

  let addition: number = firstNumber + secondNumber;
  let subtraction: number = firstNumber - secondNumber;
  let multiplication: number = firstNumber * secondNumber;
  let division : number = firstNumber / secondNumber;

  let additionString: string = `${firstNumber} + ${secondNumber} = ${addition}`;
  let subtractionString: string = `${firstNumber} - ${secondNumber} = ${subtraction}`;
  let multiplicationString: string = `${firstNumber} * ${secondNumber} = ${multiplication}`;
  let divisionString: string = `${firstNumber} / ${secondNumber} = ${division}`;

  let completeOutput: string = additionString + "\n" + subtractionString + "\n" + multiplicationString + "\n" + divisionString;

  document.getElementById("completeOutput").innerText = "" + completeOutput;
}