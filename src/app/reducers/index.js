import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import spots from './spots';

const rootReducer = combineReducers({spots, routing: routerReducer});

export default rootReducer;
