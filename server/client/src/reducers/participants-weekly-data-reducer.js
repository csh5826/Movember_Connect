import { FETCH_WEEKLY_DATA } from '../actions';

export default (state = {weekOneCount: [], weekTwoCount: [], weekThreeCount: [], weekFourCount: [],weekFiveCount: []}, action) => {
    switch (action.type){
        case FETCH_WEEKLY_DATA:
            console.log('data returning from participants weekly data reducer is', action.payload.data)
            return action.payload.data;
        default:
            return state;
    }
}