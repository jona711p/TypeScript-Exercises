function retirementCalculator() {
  let inputAgeElem = <HTMLInputElement>document.getElementById("inputAge");
  let inputRetirementAgeElem = <HTMLInputElement>document.getElementById("inputRetirementAge");

  let age: number = +inputAgeElem.value;
  let retirementAge: number = +inputRetirementAgeElem.value;

  let yearsLeft: number = retirementAge - age;

  let yearNow: number = new Date().getFullYear();

  let retirementYear: number = yearNow + yearsLeft;

  let completeOutput: string = "Du har stadig " + yearsLeft + " før du kan gå på pension. \n Det er nu år " + yearNow + ", så du kan gå på pension i år " + retirementYear;

  document.getElementById("completeOutput").innerText = "" + completeOutput;
}