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
export function createParticipant(cause, location, name, pledge, story) {
    // user_Id = user_Id.toString();
    // channel = channel.toString();
      const res = axios.post(`${ROOT_URL}`, {});
      console.log('received from server, created a new participant', res)
      return { type: CREATE_PARTICIPANT, payload: res}
    
    }