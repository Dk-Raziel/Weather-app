import { CityInfoCoord, CityInfoWeather, CityInfoMain, CityInfoWind, CityInfoSys, CityInfoMappedInfo, CityInfoClouds } from './';

/**
 * Parameters:
 *
 *     `coord` Coordinates information
 *         `coord.lon` City geo location, longitude
 *         `coord.lat` City geo location, latitude
 *     `weather` (more info Weather condition codes)
 *         `weather.id` Weather condition id
 *         `weather.main` Group of weather parameters (Rain, Snow, Extreme etc.)
 *         `weather.description` Weather condition within the group
 *         `weather.icon` Weather icon id
 *     `base` Internal parameter
 *     `main`
 *         `main.temp` Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 *         `main.pressure` Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
 *         `main.humidity` Humidity, %
 *         `main.temp_min` Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 *         `main.temp_max` Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
 *         `main.sea_level` Atmospheric pressure on the sea level, hPa
 *         `main.grnd_level` Atmospheric pressure on the ground level, hPa
 *     `wind`
 *         `wind.speed` Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
 *         `wind.deg` Wind direction, degrees (meteorological)
 *     `clouds`
 *         `clouds.all` Cloudiness, %
 *     `rain`
 *         `rain.1h` Rain volume for the last 1 hour, mm
 *         `rain.3h` Rain volume for the last 3 hours, mm
 *     `snow`
 *         `snow.1h` Snow volume for the last 1 hour, mm
 *         `snow.3h` Snow volume for the last 3 hours, mm
 *     `dt` Time of data calculation, unix, UTC
 *     `sys`
 *         `sys.type` Internal parameter
 *         `sys.id` Internal parameter
 *         `sys.message` Internal parameter
 *         `sys.country` Country code (GB, JP etc.)
 *         `sys.sunrise` Sunrise time, unix, UTC
 *         `sys.sunset` Sunset time, unix, UTC
 *     `timezone` Shift in seconds from UTC
 *     `id` City ID
 *     `name` City name
 *     `cod` Internal parameter
 */
export interface CityInfo {
  /** Coordinates information */
  coord: CityInfoCoord;

  /** Weather information (Array) */
  weather: CityInfoWeather[];

  /** Internal parameter */
  base: string;

  /** Main information */
  main: CityInfoMain;

  /** Visibility */
  visibility: number;

  /** Wind Information */
  wind: CityInfoWind;

  /** Cloud Information */
  clouds: CityInfoClouds;

  /** Time of data calculation, unix, UTC */
  dt: number;

  /** Sun Information */
  sys: CityInfoSys;

  /** Shift in seconds from UTC */
  timezone: number;

  /** City ID */
  id: number;

  /** City name */
  name: string;

  /** Internal parameter */
  cod: number;
}

/** Interface to use after the @function formatWeatherCall is used */
export interface CityInfoFormatted extends CityInfo {
  /** Custom added parameter with extra and useful info */
  mapped_info: CityInfoMappedInfo;
}


