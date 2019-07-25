
/** City Info Weather information */
export interface CityInfoWeather {
  /** Weather condition id */
  id: number;

  /** Group of weather parameters (Rain, Snow, Extreme etc.) */
  main: string;

  /** Weather condition within the group */
  description: string;

  /** Weather icon id */
  icon: string;
}
