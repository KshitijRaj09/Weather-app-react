import axios from 'axios';
import React from 'react';
import SearchBar from './Components/Header-Component/SearchBar'
import {apiKey} from './api/weatherapi';
import Loading from './Components/Loading'
import WeatherContainer from './Components/WeatherContainer';
import './App.css';


class App extends React.Component{

    constructor(){
        super();
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
    }

    state={
        latitude : null,
        longitude: null,
        data: [],
        loading: true,
    }

    getLongAndLat() {
        return new Promise((resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject)
        );
    }

    async componentDidMount(){
       try{
        let position = await this.getLongAndLat(),
        { coords } = position;
        this.setState({latitude: coords.latitude,longitude : coords.longitude });
        try{
            this.setState({loading:true});
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${this.state.latitude}&lon=${this.state.longitude}&units=metric&appid=${apiKey}`);
            this.setState({data:data, loading: false});
        }catch(error){
            console.log(error.message, 'Location not found');
        }
       }catch(error){
           console.log(error.message+' : Geolocation has been blocked' );
       }
    }

    async onSearchSubmit(cityName){
        try{
            this.setState({loading:true});
            const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`);
            this.setState({data:data, loading: false});
        }catch(error){
            console.log(error.message,'Location not Found');
        }
    }

    render(){
        return(
            <div>
                <div className='heading'>
                <h1 className='App-title'>Weather-App</h1>
                <SearchBar className='searchBar' onSearchSubmit={this.onSearchSubmit}/>
                </div>  
                <div className='main-container'>
                    {(this.state.loading?<Loading/> : <WeatherContainer weatherData={this.state.data}/>)}
                </div>

            </div>
              
        )
    }
}

export default App;