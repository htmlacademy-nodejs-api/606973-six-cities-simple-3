import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';

const MIN_PRICE = 1000;
const MAX_PRICE = 30000;

const MIN_RATING = 0;
const MAX_RATING = 5;

const MIN_BEDROOMS = 1;
const MAX_BEDROOMS = 7;

const MIN_ADULTS = 1;
const MAX_ADULTS = 7;

const MIN_COORDINATE = 1;
const MAX_COORDINATE = 50;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const postDate = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const images = getRandomItems<string>(this.mockData.images).join(';');
    const isPremium = getRandomItem(['true', 'false']);
    const rating = generateRandomValue(MIN_RATING, MAX_RATING, 1).toString();
    const type = getRandomItem<string>(this.mockData.types);
    const bedrooms = generateRandomValue(MIN_BEDROOMS, MAX_BEDROOMS).toString();
    const maxAdults = generateRandomValue(MIN_ADULTS, MAX_ADULTS).toString();
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE).toString();
    const goods = getRandomItems<string>(this.mockData.goods).join(';');
    const avatar = getRandomItem<string>(this.mockData.avatarUrls);
    const isPro = getRandomItem(['true', 'false']);
    const name = getRandomItem<string>(this.mockData.names);
    const mail = getRandomItem<string>(this.mockData.mails);
    const latitude = generateRandomValue(MIN_COORDINATE, MAX_COORDINATE, 5).toString();
    const longitude = generateRandomValue(MIN_COORDINATE, MAX_COORDINATE, 5).toString();

    const [firstname, lastname] = name.split(' ');

    return [
      title, description, postDate, city, previewImage, images, 
      isPremium, rating, type, bedrooms, maxAdults, 
      price, goods, avatar, isPro, firstname, lastname, mail, latitude, 
      longitude
    ].join('\t');
  }
}