window.addEventListener('load',()=>{
    let long;
    let lat;
    let temperature_degree = document.querySelector('.temp__degree');
    let temperature_dscription = document.querySelector('.temp__description');
    let location_timezone = document.querySelector('.location__timezone');
    let temperature = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const cors__proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=9640a7b9d4bf3bee8338b9ce03e3623f`;
            fetch(api).then(response=>{
                return response.json();
            })
            .then(data=>{
                console.log(data);
                //Set DOM Elements for te API
                temperature_degree.textContent = data.main.temp;
                temperature_dscription.textContent = data.weather[0].description;
                location_timezone.textContent = data.sys.country;
                var icon = `${data.weather[0].icon}`;
                document.getElementById("icon").className = `owi owi-${icon}`;
                let farenheit = (temperature_degree.textContent * 9) / 5 + 32;
                // Changing Temperature to Farenheit/Celsius
                temperature.addEventListener('click',()=>{
                    if(temperatureSpan.textContent === "C"){
                        temperatureSpan.textContent = "F";
                        temperature_degree.textContent = Math.floor(farenheit);
                        
                    }else if(temperatureSpan.textContent === "F"){
                        temperatureSpan.textContent = "C";
                        temperature_degree.textContent = data.main.temp;

                    }
                })
                
                
            })
        });
        
    }else{
        h1.textContent = " Hey! you're browser dose'nt support";
    }

});