import {RATING_UP, RATING_DOWN, FETCH_IMAGES} from '../constants/index';

export const increaseRating = id => ({
  type: RATING_UP,
  payload: id
});

export const decreaseRating = id => ({
  type: RATING_DOWN,
  payload: id
});

export const fetchImages = images => ({
  type: FETCH_IMAGES,
  payload: images
});
