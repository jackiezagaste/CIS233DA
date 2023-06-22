showTime();

let brakeStatus = 1;
let tractionStatus = 1;
let batteryCharge = 0;
let gasLevel = 0;
let shifter = 0;
let shiftInd = document.getElementById("mode");
let shiftHandle = document.getElementById("bttn_shifter");

function setMode() {
  switch (shifter) {
      case 0:
          shifter = 1;
          shiftInd.innerHTML = "ECO PRO";
          shiftHandle.style.top = "720px";
        break;
        default:
          shifter = 0;  
          shiftInd.innerHTML = "PARK";
          shiftHandle.style.top = "700px";
  }
}

function setBrake() {
  if (brakeStatus == 1) {
      brakeStatus = 0;
      document.getElementById("brake").src = "./assets/images/p0.png";
      document.getElementById("bttn_park").src = "./assets/images/bttn_park_0.PNG"
  } else {
      brakeStatus = 1;
      document.getElementById("brake").src = "./assets/images/p1.png";
      document.getElementById("bttn_park").src = "./assets/images/bttn_park_1.PNG"
  }
}

function setTraction() {
  if (tractionStatus == 1) {
      tractionStatus = 0;
      document.getElementById("trac").src = "./assets/images/trac1.png";
      document.getElementById("bttn_trac").src = "./assets/images/bttn_trac_0.PNG"
  } else {
      tractionStatus = 1;
      document.getElementById("trac").src = "./assets/images/trac0.png";
      document.getElementById("bttn_trac").src = "./assets/images/bttn_trac_1.PNG"
  }
}

function chargeBattery() {
  if (batteryCharge == 0) {
      batteryCharge = 1;
      document.getElementById("batt").src = "./assets/images/batt1.png";
      document.getElementById("bttn_batt").src = "./assets/images/bttn_batt_1.PNG"
  } else {
      batteryCharge = 0;
      document.getElementById("batt").src = "./assets/images/batt0.png";
      document.getElementById("bttn_batt").src = "./assets/images/bttn_batt_0.PNG"
  }
}

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
