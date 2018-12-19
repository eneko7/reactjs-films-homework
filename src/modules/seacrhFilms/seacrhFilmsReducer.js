import {
  SAVE_SEARCHING_WORD,
} from './searchFilmsActions';

const initialState = {
  searchedWord: '',
};

const searchFilmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SEARCHING_WORD:
      return {
        ...state,
        searchedWord: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default searchFilmsReducer;
