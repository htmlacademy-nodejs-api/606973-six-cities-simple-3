export type Offer = {
  title: string,
  description: string,
  postDate: Date;
  bedrooms: number,
  city: 'Paris' | 'Cologne ' | 'Brussels ' | 'Amsterdam ' | 'Hamburg' | 'Dusseldorf ',
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
