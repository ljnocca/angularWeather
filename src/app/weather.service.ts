import { Injectable } from '@angular/core';
import {WEATHER_ITEMS} from './weather/weather.data';

// services allow you to have centralized places in application which you may access from all components, directives, classes...
// handles things that will need to be accessible from several places
// this service will go out to the internet to fetch the data
// injectable notation is needed in order to inject something into the service

@Injectable()
export class WeatherService {

  constructor() { }
  // fetches WEATHER_ITEMS in weatherdata file.
  // seperate service to centralize functionalities, not repeat yourself, also if you're using it in many components and don't want to repeat yourself.
  getWeatherItems() {
    return WEATHER_ITEMS
  }

}
