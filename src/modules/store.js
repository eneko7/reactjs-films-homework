import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import films from './films/filmsReducer';

const rootReducer = combineReducers({
  films,
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
