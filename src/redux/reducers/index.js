import { combineReducers } from 'redux'
import common from './common'
import user from './user'
import topics from './topics'

const rootReducers = combineReducers({
  common,
  user,
  topics
});

export default rootReducers;
