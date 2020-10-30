import axios from 'axios';

export const FETCH_PARTICIPANTS = 'fetch_participants';
export const CREATE_PARTICIPANT = 'create_participant'
const ROOT_URL = 'http://localhost:8000/participants';

// get participant data
export function fetchParticipants () {
    const request = axios.get(ROOT_URL)
    return {
        type: FETCH_PARTICIPANTS,
        payload: request
        
    };
}

// create a new participant
export function createParticipant(participant) {
    // user_Id = user_Id.toString();
    // channel = channel.toString();
    console.log('the participant is', participant)
      const res = axios.post(`${ROOT_URL}`, participant)
      console.log('received from server, created a new participant', res)
      return { 
            type: CREATE_PARTICIPANT, 
            payload: res
      };    
}