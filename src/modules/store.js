import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import films from './films/filmsReducer';
import film from './film/filmReducer';
import genres from './genres/genresReducer';
import navlinks from './navlinks/navlinksReducer';
import search from './seacrhFilms/seacrhFilmsReducer';

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
