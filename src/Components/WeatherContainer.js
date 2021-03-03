import React from 'react'

function WeatherContainer({weatherData}) {
    let Data={
      name:weatherData.name,
      date:weatherData.dt,
      dateConverter(){
          let milliseconds = this.date * 1000;
          return new Date(milliseconds).toLocaleTimeString();
      },
      icon: weatherData.weather[0].icon,
      windSpeed : weatherData.wind.speed,
      description: weatherData.weather[0].description,
      temperature : weatherData.main.temp,
      feels_like : weatherData.main.feels_like,
      humidity : weatherData.main.humidity,
      quotes: `Dummy weather quotes are here. I will add quotes here later`

    }
  
    let iconUrl =`http://openweathermap.org/img/wn/${Data.icon}@2x.png`;

    return (
      <div className='weather-container'>
        <div className='grid-1'>
          <img src={iconUrl} alt={Data.description} style={{float:'left'}}/>
          <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>{Data.description}</div>
        </div>
        <div className='grid-2'>
          <h3>{Data.temperature} &#8451;</h3>
          <div>Feel Like {Data.feels_like} </div>
        </div>
        
        <div className='grid-3'>
          <h3>{Data.name}</h3>
          <p>{Data.dateConverter()}</p>
        </div>

        <div className='grid-4'>
            <div>Humidity</div>
            <div>{Data.humidity} %</div>
          </div>
          <div className='grid-5'>
            <div>Wind</div>
            <div>{Data.windSpeed} m/s</div>
          </div>  
          <div className='grid-6'>
            {Data.quotes}
          </div>
      </div>
      
    )
}

export default WeatherContainer;

WeatherContainer.defaultProps={
    weatherData:[],
}
