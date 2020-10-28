import axios from 'axios';

export const FETCH_PARTICIPANTS = 'fetch_participants';

const ROOT_URL = 'http://localhost:8000/participants';

export function fetchParticipants () {
    const request = axios.get(ROOT_URL)
    return {
        type: FETCH_PARTICIPANTS,
        payload: request
        
    };

}