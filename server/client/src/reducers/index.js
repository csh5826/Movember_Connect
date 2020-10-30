import { combineReducers } from 'redux';
import participants from './participants-reducer';
// import newParticipant from './create-participants-reducer';

// combines all our reducers into one
const rootReducer = combineReducers({
    participantsData: participants

})

export default rootReducer;