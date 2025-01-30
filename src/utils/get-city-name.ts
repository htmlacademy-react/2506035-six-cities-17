import { cityLinks } from '../const';

export function getCityName(cityId?: string) {
  return cityLinks.find((link) => link.id === cityId)?.displayName || '';
}
