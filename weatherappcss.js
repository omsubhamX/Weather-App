

// let searchedWord;
// let result;
// // in searchbar we r keeping the html element with id input
// const searchbar = document.getElementById("input");
// // we r listening to input event and executing callback func
// searchbar.addEventListener('input', (event) => {
//     searchedWord = event.target.value;
//     // console.log("searchedWord is ", searchedWord);
// });

// const searchButton = document.getElementById("searchbutton");
// searchButton.addEventListener('click', async () => {
//     // Construct URL and options here, using the latest value of searchedWord
//     const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${searchedWord}&format=json&u=f`;
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '9fc2531714msha714dfc97f3f700p1080f8jsn3e419d2dd10b',
//             'X-RapidAPI-Host': 'yahoo-weather5.p.rapidapi.com'
//         }
//     };

//     try {
//         const response = await fetch(url, options);
//          result = await response.json();
//         console.log(result);
//     } catch (error) {
//         console.error(error);
//     }
// });


// // Get the paragraph element by ID
// const para = document.getElementById("res");

// // Convert the JSON object to a string
// const resultString = JSON.stringify(result);
// console.log("Result:", resultString);
// // Set the text content of the paragraph element to the JSON string
// para.textContent = resultString;

// // Optional: Log the result to the console for verification
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
        //  const parsedData = JSON.parse(result);

        const temperatureincelsius =  convertFahrenheitToCelsius(result.current_observation.condition.temperature); 
     
const finalTemperature = roundUp(temperatureincelsius)
if (temperatureincelsius<15) {
  console.log("its chilling MC");
}
else if (temperatureincelsius>15 && temperatureincelsius<=30) {

  console.log("chaliba mg");
  message="chaliba mg";
}

else {
  console.log("bando garam gauchi");
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


// // Show the weather information container and hide the search bar
// document.querySelector(".weather").style.display = "block";
// document.querySelector(".card").style.display = "none";



// document.getElementById("mainSec").style.display = "block";

document.querySelector("#temperature").innerHTML = finalTemperature + "°C";

    // document.querySelector("#temperature").innerHTML= temperatureincelsius+ "°C";
        console.log(result);
   
        document.querySelector("#windspeed").innerHTML=result.current_observation.wind.speed + "KM/hr";
        document.querySelector("#humidity").innerHTML=result.current_observation.atmosphere.humidity + "%";

        document.querySelector("#location").innerHTML=result.location.city;


        // Optional: Log the result to the console for verification
    } catch (error) {
      
        console.error(error);
    }        
});

