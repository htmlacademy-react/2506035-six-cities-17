import { offerCategories } from '../const';

export function getOfferCategory(type: string): string {
  return offerCategories[type];
}
