export interface CityForecast {
  cod: number;
  message: number;
  cnt: number;
  list: {
    dt: number;
    main: {
      temp: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    },
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[],
    clouds: {
      all: number;
    },
    wind: {
      speed: number;
      deg: number;
    },
    sys: {
      pod: string;
    },
    dt_txt: string;
  }[]
  ;
  city: {
    id: number;
    name: string,
    coord: {
      lat: number;
      lon: number;
    },
    country: string;
    population: number;
    timezone: number;
  };
}

export class CityForecastObject {
  cod = 200;
  message = 0.0114;
  cnt = 40;
  list = [
    {
      dt: 1563861600,
      main: {
        temp: 17.07,
        temp_min: 17.07,
        temp_max: 19.18,
        pressure: 1020.96,
        sea_level: 1020.96,
        grnd_level: 1021.08,
        humidity: 72,
        temp_kf: -2.11
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: {
        all: 0
      },
      wind: {
        speed: 3.24,
        deg: 195.002
      },
      sys: {
        pod: 'd'
      },
      dt_txt: '2019-07-23 06: 00: 00'
    }
  ];
  city: {
    id: 2759794,
    name: 'Amsterdam',
    coord: {
      lat: 52.3728,
      lon: 4.8936
    },
    country: 'NL',
    population: 2122311,
    timezone: 7200
  };
}
