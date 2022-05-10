import { Component, Input, OnInit } from '@angular/core';
import { IWeatherCard } from 'src/app/Core/Interface/IWeatherDataInterfaces';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent {
  @Input()
  weatherData!: IWeatherCard;
}
