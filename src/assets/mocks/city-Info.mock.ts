import { CityInfoFormatted } from '@shared/models/';

/** Default CityInfo values from interface with unit test finality */
export const cityInfoMock: CityInfoFormatted = {
  coord: {
    lon: 12.48,
    lat: 41.89
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    }
  ],
  base: 'stations',
  main: {
    temp: 22.41,
    pressure: 1017,
    humidity: 64,
    temp_min: 20,
    temp_max: 25,
    sea_level: 20,
    grnd_level: 10,
    temp_kf: 10
  },
  visibility: 10000,
  wind: {
    speed: 1,
    deg: 220
  },
  clouds: {
    all: 0
  },
  dt: 1563855728,
  sys: {
    type: 1,
    id: 6792,
    message: 0.0089,
    country: 'IT',
    sunrise: 1563854071,
    sunset: 1563907094
  },
  timezone: 7200,
  id: 6539761,
  name: 'Rome',
  cod: 200,
  mapped_info: {
    sky_icon_url: 'http://openweathermap.org/img/wn/01d.png',
    compass_direction: 'N',
    average_temp: '25'
  }
};
