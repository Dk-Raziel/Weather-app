/** City Info Main information */
export interface CityInfoMain {
  /** Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit */
  temp: number;

  /** Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa */
  pressure: number;

  /** Humidity, % */
  humidity: number;

  // tslint:disable-next-line: max-line-length
  /** Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
  temp_min: number;

  // tslint:disable-next-line: max-line-length
  /** Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. */
  temp_max: number;

  /** Atmospheric pressure on the sea level, hPa */
  sea_level: number;

  /** Atmospheric pressure on the ground level, hPa */
  grnd_level: number;

  /** Internal parameter */
  temp_kf: number;
}
