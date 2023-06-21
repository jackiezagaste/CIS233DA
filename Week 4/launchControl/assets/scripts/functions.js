showTime();

let gasLevel = 0;

function getGas() {
  if (gasLevel == 0) {
    gasLevel = 1;
    document.getElementById("gas").src = "./assets/images/gas1.png";
    document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_1.PNG"
  } else {
    gasLevel = 0;
    document.getElementById("gas").src = "./assets/images/gas0.png";
    document.getElementById("bttn_gas").src = "./assets/images/bttn_gas_0.PNG"
  }
}