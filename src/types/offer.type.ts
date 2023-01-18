import { City } from './city.type';
import { Housing } from './housing.type';

export type Offer = {
  title: string,
  description: string,
  postDate: Date;
  city: City,
  previewImage: string,
  images: string[],
  isPremium: boolean,
  rating: number,
  type: Housing,
  bedrooms: number,
  maxAdults: number,
  price: number,
  goods: string[],
  host: {
    avatarUrl: string,
    isPro: boolean,
    name: string,
    mail: string
  },
  location: {
    latitude: number,
    longitude: number,
  },
};
