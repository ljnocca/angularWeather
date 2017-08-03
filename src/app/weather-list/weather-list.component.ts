import { Component, OnInit } from '@angular/core';
import {WeatherItem} from '../weather/weather-item';
import {WeatherService} from '../weather.service';


@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  weatherItems: WeatherItem[];

  // in constructor, I'm using a shortcut to create a field for a class in typescript
  // should be of type WeatherService. Tells Angular that we need an object of type WeatherService for this class to work properly
  constructor(private _weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherItems = this._weatherService.getWeatherItems();
  }

}
