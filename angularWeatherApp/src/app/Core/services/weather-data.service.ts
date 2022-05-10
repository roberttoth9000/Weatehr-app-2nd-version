import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWeatherCard } from '../Interface/IWeatherDataInterfaces';

@Injectable({
  providedIn: 'root',
})
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  getWeatherDataByIdsFromApi(ids: string[]): Observable<any> {
    return this.http.get<any>(
      `${environment.url}group?id=${ids.join(',')}&appid=${
        environment.APYkey
      }&units=metric`
    );
  }
}
