// Parameters:

//     coord
//         coord.lon City geo location, longitude
//         coord.lat City geo location, latitude
//     weather (more info Weather condition codes)
//         weather.id Weather condition id
//         weather.main Group of weather parameters (Rain, Snow, Extreme etc.)
//         weather.description Weather condition within the group
//         weather.icon Weather icon id
//     base Internal parameter
//     main
//         main.temp Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//         main.pressure Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
//         main.humidity Humidity, %

// tslint:disable-next-line: max-line-length
//         main.temp_min Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.

// tslint:disable-next-line: max-line-length
//         main.temp_max Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
//         main.sea_level Atmospheric pressure on the sea level, hPa
//         main.grnd_level Atmospheric pressure on the ground level, hPa
//     wind
//         wind.speed Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
//         wind.deg Wind direction, degrees (meteorological)
//     clouds
//         clouds.all Cloudiness, %
//     rain
//         rain.1h Rain volume for the last 1 hour, mm
//         rain.3h Rain volume for the last 3 hours, mm
//     snow
//         snow.1h Snow volume for the last 1 hour, mm
//         snow.3h Snow volume for the last 3 hours, mm
//     dt Time of data calculation, unix, UTC
//     sys
//         sys.type Internal parameter
//         sys.id Internal parameter
//         sys.message Internal parameter
//         sys.country Country code (GB, JP etc.)
//         sys.sunrise Sunrise time, unix, UTC
//         sys.sunset Sunset time, unix, UTC
//     timezone Shift in seconds from UTC
//     id City ID
//     name City name
//     cod Internal parameter


export interface CityInfo {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export class CityInfoObject {
  coord = {
    lon: 12.48,
    lat: 41.89
  };
  weather = [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    }
  ];
  base = 'stations';
  main = {
    temp: 22.41,
    pressure: 1017,
    humidity: 64,
    temp_min: 20,
    temp_max: 25
  };
  visibility = 10000;
  wind = {
    speed: 1,
    deg: 220
  };
  clouds = {
    all: 0
  };
  dt = 1563855728;
  sys = {
    type: 1,
    id: 6792,
    message: 0.0089,
    country: 'IT',
    sunrise: 1563854071,
    sunset: 1563907094
  };
  timezone = 7200;
  id = 6539761;
  name = 'Rome';
  cod = 200;
}
