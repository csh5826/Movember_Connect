import { CREATE_PARTICIPANT, FETCH_PARTICIPANTS } from '../actions';

export default (state = {totalParticipants: 0, totalPledged: [], participants:[]}, action) => {
    switch (action.type){
        case FETCH_PARTICIPANTS:
            console.log('data returning from get participants reducer is', action.payload.data)
            console.log('total pledged is', action.payload.data.totalPledged[0].total)
            return action.payload.data;
        case CREATE_PARTICIPANT:
            console.log('creating a new participant', state)
            return {...state, participants:[...state.participants, action.payload.data]}
        default:
            return state;
    }
}