import { readFileSync } from 'fs';
import { City } from '../../types/city.type.js';
import { Housing } from '../../types/housing.type.js';
import { Offer } from '../../types/offer.type.js';
import { FileReaderInterface } from './file-reader.interface.js';

export default class TSVFileReader implements FileReaderInterface {
  private rawData = '';

  constructor(public filename: string) { }

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      return [];
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim() !== '')
      .map((line) => line.split('\t'))
      .map(([title, description, createdDate, city, previewImage, images, isPremium, rating, type, bedrooms, maxAdults, price, goods, name, mail, avatarUrl, isPro, latitude, longitude]) => ({
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
      }));
  }
}
