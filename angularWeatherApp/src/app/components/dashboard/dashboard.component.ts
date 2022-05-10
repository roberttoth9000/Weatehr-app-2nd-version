import { Component, OnInit } from '@angular/core';
import { IWeatherCard } from 'src/app/Core/Interface/IWeatherDataInterfaces';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor() {}

  watherDataList: IWeatherCard[] = [];
  cityIDs: number[] = [2009661, 2019646, 2004026, 2009435];

  ngOnInit(): void {
    if (this.cityIDs.length > 0) {
    }
  }

  getWeatherDataBySearchValue(searchValue: string): void {
    console.log(searchValue);
  }
}
