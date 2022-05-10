import { Component, OnInit } from '@angular/core';
import { IWeatherCard } from 'src/app/Core/Interface/IWeatherDataInterfaces';
import { WeatherDataService } from 'src/app/Core/services/weather-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  watherDataList: IWeatherCard[] = [];
  cityIDs: string[] = ['5809844', '4164138', '3128760'];

  constructor(private weatherDataService: WeatherDataService) {}

  ngOnInit(): void {
    if (this.cityIDs.length > 0) {
      this.weatherDataService
        .getWeatherDataByIdsFromApi(this.cityIDs)
        .subscribe({
          next: (weatherCardData: IWeatherCard[]) => {
            console.log(weatherCardData);
          },
          error: (err) => {
            console.log(err);
          },
        });
    }
  }

  getWeatherDataBySearchValue(searchValue: string): void {
    console.log(searchValue);
  }
}
