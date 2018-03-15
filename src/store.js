import {createStore, combineReducers, applyMiddleware} from 'redux';
import {postsReducer} from './reducers/posts-reducer';

// middlewares
import promise from 'redux-promise-middleware';
import {createLogger} from 'redux-logger';
const logger = createLogger({
  // ...options
});

const middleware = applyMiddleware(promise(), logger);

const reducers = combineReducers({
  posts: postsReducer
});

const store = createStore(reducers, middleware);

export default store;