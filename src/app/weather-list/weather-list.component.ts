import { Component, OnInit } from '@angular/core';
import {WeatherItem} from '../weather/weather-item';
import {WEATHER_ITEMS} from '../weather/weather.data';


@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  weatherItems: WeatherItem[];

  ngOnInit() {
    this.weatherItems = WEATHER_ITEMS;
  }

}
