import { CityInfoCoord } from '../city-info';

/** City Details */
export interface CityForecastCity {
  /** City ID */
  id: number;

  /** City Name */
  name: string;

  /** City Coordinates */
  coord: CityInfoCoord;

  /** Country code (GB, JP etc.) */
  country: string;

  /** City population */
  population: number;

  /** Shift in seconds from UTC */
  timezone: number;
}
