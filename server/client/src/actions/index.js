import axios from 'axios';

export const FETCH_PARTICIPANTS = 'fetch_participants';
export const CREATE_PARTICIPANT = 'create_participant';
export const FETCH_CAUSE_DATA = 'fetch_cause_data';
export const FETCH_WEEKLY_DATA = 'fetch_weekly_data';

const ROOT_URL = 'http://localhost:8000';
let QUERY = ''

// get participant data
export function fetchParticipants () {
    QUERY = '/participants'
    const request = axios.get(ROOT_URL + QUERY)
    return {
        type: FETCH_PARTICIPANTS,
        payload: request
        
    };
}

// create a new participant
export function createParticipant(participant) {
    console.log('the participant is', participant)
    QUERY = '/participants'
      const res = axios.post(`${ROOT_URL}` + QUERY, participant)
      console.log('received from server, created a new participant', res)
      return { 
            type: CREATE_PARTICIPANT, 
            payload: res
      };    
}

//get data by specific cause 
export function fetchCauseData(params){
    QUERY = '/causedata' + `?cause=${params.cause}`;
    const request = axios.get(ROOT_URL + QUERY)
    return {
        type: FETCH_CAUSE_DATA,
        payload: request        
    };
}

//get weekly participant data
export function fetchWeeklyData(){
    QUERY = '/timedata'
    const request = axios.get(ROOT_URL + QUERY)
    return {
        type: FETCH_WEEKLY_DATA,
        payload: request
    };
}