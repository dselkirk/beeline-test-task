import {RATING_UP, RATING_DOWN, FETCH_IMAGES} from '../constants/index';

const sortArray = array => {
 return array.sort((a,b) => {
    if (a.rating > b.rating) {
      return -1;
    }
    if (a.rating < b.rating) {
      return 1;
    }
    if (a.id < b.id) {
      return 1;
    }

    if (a.id > b.id) {
     return -1;
    }
   return 0;
  })
};

export default function images(state = {images: []}, action) {
  switch (action.type) {

    case FETCH_IMAGES:
      return {
        ...state,
        images: sortArray(action.payload)
      };

    case RATING_UP:
      return {
        ...state,
        images: sortArray(
          state.images.map(item => item.id === action.payload ?
            { ...item, rating: item.rating + 1 } :
            item
          )
        )
      };

    case RATING_DOWN:
      return {
        ...state,
        images: sortArray(
          state.images.map(item => item.id === action.payload ?
            { ...item, rating: item.rating - 1 } :
            item
          )
        )
      };

    // initial state
    default:
      return state;
  }
}
