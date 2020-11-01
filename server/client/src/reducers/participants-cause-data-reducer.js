import { FETCH_CAUSE_DATA } from '../actions';

export default (state = {specificTotalParticipants: null, specificTotalPledged: [], participantsCause: ''}, action) => {
    switch (action.type){
        case FETCH_CAUSE_DATA:
            console.log('data returning from participants cause data reducer is', action.payload.data)
            return action.payload.data;
        default:
            return state;
    }
}