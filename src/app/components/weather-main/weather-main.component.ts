
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-weather-main',
  templateUrl: './weather-main.component.html',
  styleUrls: ['./weather-main.component.css']
})
export class WeatherMainComponent implements OnInit {

  @ViewChild("weatherInput",{static:true})weatherInput: any;
  cityName: any;
  WeatherData:any;
  lat:any;
  lon:any;
  currentLat: any;
  currentLon: any;
  position: any;
  constructor() { }


   public ngOnInit(): void {
    this.getLocation();
  }

    getLocation(){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {

          if(position ) {    
            this.findFirstLoad(position.coords.latitude,  position.coords.longitude)
          } 
          else {
            alert ('Sorry browser does not support geoLocation');
          }
          
        })
      }
    }


   findFirstLoad(latitude:number, longitude:number) {
    
    const apiKey = '840b001ff8f9fdf61e65d999355c488c'
    
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    .then(async (response)=>{
      const data =  await response.json()
      this.setWeatherData(data)
    })
    .catch((error) =>{
      console.log(error);
      
    })

   }


   getWeather() {
    const apiKey = '840b001ff8f9fdf61e65d999355c488c'
    const cityName = this.weatherInput.nativeElement.value

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`)
    .then(async (response)=>{
      const data =  await response.json()
      this.setWeatherData(data)
    })
    .catch((error) =>{
      console.log(error);
    })

   }


  setWeatherData(data: any) {
    
    
    this.WeatherData= data;
    let sunsetTime = new Date(this.WeatherData.sys.sunset * 1000);
    this.WeatherData.sunset_time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.WeatherData.isDay = (currentDate.getTime() < sunsetTime.getTime());
    this.WeatherData.temp_celcius = (this.WeatherData.main.temp - 273.15).toFixed(0);
    this.WeatherData.temp_min = (this.WeatherData.main.temp_min - 273.15).toFixed(0);
    this.WeatherData.temp_max = (this.WeatherData.main.temp_max - 273.15).toFixed(0);
    this.WeatherData.temp_feels_like = (this.WeatherData.main.feels_like - 273.15).toFixed(0);

    console.log(this.WeatherData);
    console.log(this.WeatherData);

  }
};