


let searchedWord;
let result;
let response;
let message;
let weatherIcon;

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}
function roundUp(decimalNumber) {
  return Math.ceil(decimalNumber);
}
const searchbar = document.getElementById("input");
searchbar.addEventListener('input', (event) => {
    searchedWord = event.target.value;
});

const searchButton = document.getElementById("searchbutton");
searchButton.addEventListener('click', async () => {
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${searchedWord}&format=json&u=f`;
    const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '40b8311690msh7ca4c931665db33p18c6f1jsn60bc4c37a781',
          'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
        }
    };

    try {
         response = await fetch(url, options);
         result = await response.json();
       
        const temperatureincelsius =  convertFahrenheitToCelsius(result.current_observation.condition.temperature); 
     
const finalTemperature = roundUp(temperatureincelsius)
if (temperatureincelsius<15) {
  console.log("its chilling ");
}
else if (temperatureincelsius>15 && temperatureincelsius<=30) {

  console.log("modrate");
  message="modrate";
}

else {
  console.log("hot");
}

         console.log(temperatureincelsius);
         var img = document.getElementById('icon');
// image targeting from here
if (temperatureincelsius<15) {
  img.src = "./rainy-day.png"; // Example image for rainy weather
} else if (temperatureincelsius >= 15 && temperatureincelsius <= 30) {
  img.src = "./cloudy.png"; // Example image for cloudy weather
} else {
  img.src = "./sun.png"; // Example image for hot weather
}



document.querySelector("#temperature").innerHTML = finalTemperature + "°C";

   
        console.log(result);
   
        document.querySelector("#windspeed").innerHTML=result.current_observation.wind.speed + "KM/hr";
        document.querySelector("#humidity").innerHTML=result.current_observation.atmosphere.humidity + "%";

        document.querySelector("#location").innerHTML=result.location.city;


    } catch (error) {
      
        console.error(error);
    }        
});

