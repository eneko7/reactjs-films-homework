import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import films from './modules/films/filmsReducer';
import film from './modules/film/filmReducer';
import genres from './modules/genres/genresReducer';
import navlinks from './modules/navlinks/navlinksReducer';
import search from './modules/seacrhFilms/seacrhFilmsReducer';

const rootReducer = combineReducers({
  films,
  film,
  genres,
  navlinks,
  search,
});

const initialState = {};

export default () => createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(thunk),
    global.window.devToolsExtension ? global.window.__REDUX_DEVTOOLS_EXTENSION__() : f => f, // eslint-disable-line
  ),
);
