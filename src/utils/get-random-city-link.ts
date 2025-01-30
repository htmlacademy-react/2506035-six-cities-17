import { CityLink } from '../types';

export function getRandomCityLink(cities: CityLink[]): CityLink {
  const index = Math.floor(Math.random() * cities.length);
  return cities[index];
}
