import { City } from "../types/city.type";
import { Housing } from "../types/housing.type";
import { Offer } from "../types/offer.type";

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, createdDate, city, previewImage, images, isPremium, rating, type, bedrooms, maxAdults, price, goods, name, mail, avatarUrl, isPro, latitude, longitude] = tokens;
  return {
    title,
    description,
    postDate: new Date(createdDate),
    city: city as City,
    previewImage,
    images: images.split(';').map((img) => img),
    isPremium: Boolean(isPremium),
    rating: Number(rating),
    type: type as Housing,
    bedrooms: Number(bedrooms),
    maxAdults: Number(maxAdults),
    price: Number(price),
    goods: goods.split(';').map((adv) => adv),
    host: {avatarUrl, isPro: Boolean(isPro), name, mail},
    location: { latitude: Number(latitude), longitude: Number(longitude)}
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';