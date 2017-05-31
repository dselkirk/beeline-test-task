import {IDGenerator} from './id-generator';

export function normalizeData(data) {
  const images = [];
  const generator = new IDGenerator();

  data.forEach(src => {
    const id = generator.generate();
    images.push({
      rating: 0,
      src,
      id
    });
  });

  return images;
}
