import { FETCH_PARTICIPANTS } from '../actions';

export default (state = {totalParticipants: 0, totalPledged: [], participants:[]}, action) => {
    switch (action.type){
        case FETCH_PARTICIPANTS:
            console.log('data returning from get participants reducer is', action.payload.data)
            return action.payload.data;
        default:
            return state;
    }
}