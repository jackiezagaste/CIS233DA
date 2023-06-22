function tryLaunch() {
  let launchControl = 1;
  let errorMessage = "";

  if (brakeStatus === 1) {
    launchControl = 0;
    errorMessage += "The parking brake needs to be disengaged.<br>";
  }
  if (tractionStatus === 1) {
    launchControl = 0;
    errorMessage += "Traction control needs to be turned off.<br>";
  }
  if (gasLevel === 0) {
    launchControl = 0;
    errorMessage += "The gas tank needs to be filled.<br>";
  }
  if (batteryCharge === 0) {
    launchControl = 0;
    errorMessage += "The battery needs to be charged.<br>";
  }
  if (shifter !== 3) {
    launchControl = 0;
    errorMessage += "Shift to SPORT mode.<br>";
  }

  let launchImage = document.getElementById("launch");
  let msgElement = document.getElementById("msg");

  if (launchControl === 0) {
    launchImage.src = "./assets/images/lca0.png";
    msgElement.innerHTML = errorMessage;
    new Audio("./assets/media/sputter.mp3").play();
  } else {
    launchImage.src = "./assets/images/lca1.png";
    msgElement.innerHTML = "";
    new Audio("./assets/media/launch.mp3").play();
  }
}
