import { combineReducers } from 'redux';
import participants from './participants-reducer';

// combines all our reducers into one
const rootReducer = combineReducers({
    participantsData: participants

})

export default rootReducer;