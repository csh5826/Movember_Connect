import { combineReducers } from 'redux';
import participants from './participants-reducer';
import participantCauseData from './participants-cause-data-reducer';

// combines all our reducers into one
const rootReducer = combineReducers({
    participantsData: participants,
    participantCauseData: participantCauseData

})

export default rootReducer;