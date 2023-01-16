import { City } from './city.type';

export type Offer = {
  title: string,
  description: string,
  postDate: Date;
  bedrooms: number,
  city: City,
  previewImage: string,
  images: string[],
  isPremium: boolean,
  rating: number,
  type: string,
  roomsCount: number,
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
