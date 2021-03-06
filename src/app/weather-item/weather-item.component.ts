import {Component, Input} from '@angular/core';
import {WeatherItem} from '../weather/weather-item';

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent {
  @Input()
  weatherItem: WeatherItem;

}
