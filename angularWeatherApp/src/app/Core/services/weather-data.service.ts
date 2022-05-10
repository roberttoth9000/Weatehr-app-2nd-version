import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  IWeatherCard,
  IWeatherDataApi,
  IWeatherDataApiList,
} from '../Interface/IWeatherDataInterfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  getWeatherDataByIdsFromApi(ids: string[]): Observable<IWeatherCard[]> {
    return this.http
      .get<IWeatherDataApiList>(
        `${environment.url}group?id=${ids.join(',')}&appid=${
          environment.APYkey
        }&units=metric`
      )
      .pipe(
        map((data: IWeatherDataApiList) =>
          data.list.map<IWeatherCard>((weatherData: IWeatherDataApi) => {
            return {
              id: weatherData.id,
              cityName: weatherData.name,
              tempriture: weatherData.main.temp,
              iconURL: `${environment.iconUrl}${weatherData.weather[0].icon}@2x.png`,
              country: weatherData.sys.country,
            };
          })
        )
      );
  }
}
