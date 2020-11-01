import { combineReducers } from 'redux';
import participants from './participants-reducer';
import participantsCauseData from './participants-cause-data-reducer';
import participantsWeeklyData from './participants-weekly-data-reducer';

// combines all our reducers into one
const rootReducer = combineReducers({
    participantsData: participants,
    participantsCauseData: participantsCauseData,
    participantsWeeklyData: participantsWeeklyData

})

export default rootReducer;