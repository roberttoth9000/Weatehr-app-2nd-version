export interface ISearchForm {
  searchInput: string;
}

export interface IWeatherCard {
  id: number;
  cityName: string;
  tempriture: number;
  iconURL: string;
  country: string;
}

export interface IWeatherDataApiList {
  list: IWeatherDataApi[];
}

export interface IWeatherDataApi {
  id: number;
  name: string;
  main: IMain;
  weather: IWeather[];
  sys: ISystem;
}

export interface IMain {
  temp: number;
}
export interface IWeather {
  icon: string;
}
export interface ISystem {
  country: string;
}
