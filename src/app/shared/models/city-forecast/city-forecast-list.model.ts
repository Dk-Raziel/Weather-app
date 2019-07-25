import { CityInfoMain, CityInfoWeather, CityInfoClouds, CityInfoWind } from '../city-info';

/** City Forecast List Information */
export interface CityForecastList {
  /** Time of data forecasted, unix, UTC */
  dt: number;

  /** Main information */
  main: CityInfoMain;

  /** Weather information (Array) */
  weather: CityInfoWeather[];

  /** Cloud Information */
  clouds: CityInfoClouds;

  /** Wind Information */
  wind: CityInfoWind;

  /** Needs more info */
  sys: {
    pod: string;
  };

  /** Data/time of calculation, UTC */
  dt_txt: string;
}
