import { combineReducers } from 'redux';
import participants from './participants-reducer';
import participantsCauseData from './participants-cause-data-reducer';

// combines all our reducers into one
const rootReducer = combineReducers({
    participantsData: participants,
    participantsCauseData: participantsCauseData

})

export default rootReducer;