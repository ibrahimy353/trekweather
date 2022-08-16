let weather ={
    apiKey: "b9ee5b0470fbf2a7bdab2e932a32e487",
    fetchWeather: function (city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q= "
            + city 
            + "&units=metric&appid="
            + this.apiKey
        )
        .then ((response) => response.json())
        .then (( data) =>console.log(data));
    },
    displayWeather: function(data){

    }
};





