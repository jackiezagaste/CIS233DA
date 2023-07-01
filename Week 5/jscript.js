function getCountry(country) {
  var divObj;

  let country = Obj.selectedIndex;

    for (let i = 1; i <= 5; i++) {
      let divObj = document.getElementById(`country${i}`);
      divObj.style.display = 'none';
  }

  switch (country) {
    case "thailand":
      document.getElementById("country1").style.display = "inline";
      break;
    case "japan":
      document.getElementById("country2").style.display = "inline";
      break;
    case "southkorea":
      document.getElementById("country3").style.display = "inline";
      break;
    case "china":
      document.getElementById("country4").style.display = "inline";
      break;
    case "philippines":
      document.getElementById("country5").style.display = "inline";
      break;
  }

  if (country == 'thailand') { country = 'Bangkok'}
  if (country == 'japan') { country = 'Tokyo'}
  if (country == 'southkorea') { country = 'Soul'}
  if (country == 'china') { country = 'Beiging'}
  if (country == 'philippines') { country = 'Manila'}

  const apiKey = 'baaf655940ea8030eb4f1da155c202ad';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${apiKey}&units=imperial`;

  fetch(url)
      .then (response => response.json())
      .then(
        data => {

          var icon = data.weather[0].icon;
            document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            document.getElementById('icon').alt = data.weather[0].main;
            document.getElementById('icon').title = data.weather[0].main;
            document.getElementById('countryName').innerText = `Weather for ${country}`;
            document.getElementById(`country${country}`).innerHTML = `
            <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${data.weather[0].main}" title="${data.weather[0].main}">
            <p>Temperature: ${parseInt(data.main.temp)}°F</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} mph</p>
            <p>Precipitation: ${data.rain ? data.rain['1h'] || 0 : 0} mm</p>
            `;
            
            var uvi = data.main.uvi;
            var uviLevel;
            if (uvi < 3) {
              uviLevel = 'Low';
            } else if (uvi < 6) {
              uviLevel = 'Moderate';
            } else if (uvi < 8) {
              uviLevel = 'High';
            } else if (uvi < 11) {
              uviLevel = 'Very High';
            } else {
              uviLevel = 'Extreme';
            }
            document.getElementById('uvi').innerHTML = `UV Index: ${uvi} (${uviLevel})`;

          var strDay = icon.sunstr(icon.length - 1);
          var elmBody = document.getElementsByTagName('body')[0];
          if (strDay == 'n') {
            elmBody.style.color = 'white';
            elmBody.style.background = 'linear-gradient(to bottom, black, gray) no-repeat';
            elmBody.style.backgroundColor = 'gray';
          } else {
              elmBody.style.color = 'black';
              elmBody.style.background = 'linear-gradient(to bottom, lightblue, white) no-repeat';
              elmBody.style.backgroundColor = 'white';
          }
        }
      )
      .catch(error => {
        const weather = document.getElementById('weather');
        document.getElementById('countryName').innerText = 'Error getting weather data';
        console.error(error);
      })
}