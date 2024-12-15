import { OfferType } from '../types';

export const OFFERS_MOCK: OfferType[] = [
  {
    id: 'f430db82-9242-4486-8e09-2b3c439aa4a8',
    title: 'Tile House',
    type: 'apartment',
    price: 209,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.4
  },
  {
    id: 'f97c0500-1c51-412d-a72d-1e0da4da4762',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 219,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.5
  },
  {
    id: '65435c47-cd3d-432a-9f65-546d1f1885f4',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 421,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.9
  },
  {
    id: '89013707-3300-47ad-8c0b-d63f46094318',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'hotel',
    price: 370,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.85761,
      longitude: 2.358499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.1
  },
];
