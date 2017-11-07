function sayingHello() {
  let nameElem = <HTMLInputElement>document.getElementById("inputName");

  let name: string = nameElem.value;
  
  document.getElementById("outputName").innerText = "" + name;
}