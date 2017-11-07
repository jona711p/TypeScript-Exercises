function countingTheNumberOfCharacters() {
  let inputStringElem = <HTMLInputElement>document.getElementById("inputString");

  let string: string = inputStringElem.value;
  let amount: number = outputString.length;
  
  document.getElementById("outputString").innerText = "" + string;
  document.getElementById("amount").innerText = "" + amount;
}