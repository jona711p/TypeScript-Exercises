function madLib() {
  let inputNounElem = <HTMLInputElement>document.getElementById("inputNoun");
  let inputVerbElem = <HTMLInputElement>document.getElementById("inputVerb");
  let inputAdjectiveElem = <HTMLInputElement>document.getElementById("inputAdjective");
  let inputAdverbElem = <HTMLInputElement>document.getElementById("inputAdverb");

  let inputNoun: string = inputNounElem.value;
  let inputVerb: string = inputVerbElem.value;
  let inputAdjective: string = inputAdjectiveElem.value;
  let inputAdverb: string = inputAdverbElem.value;

  let completeOutput: string = `Du ${inputVerb} din ${inputAdjective} ${inputNoun} ${inputAdverb}? Det er da sjovt!`;

  document.getElementById("completeOutput").innerText = "" + completeOutput;
}