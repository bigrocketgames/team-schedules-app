import 'isomorphic-fetch';
import { API_URL } from 'react-native-dotenv';

export const GET_SPORTS_SUCCESS = 'GET_SPORTS_SUCCESS'

export const getSportsSuccess = (sports) => {
  return {
    type: GET_SPORTS_SUCCESS,
    sports
  }
}

export const getSports = () => {
  return dispatch => {
    return fetch(`${API_URL}/sports`)
      .then((response) => response.json())
      .then((sports) => {
        dispatch(getSportsSuccess(sports))
      })
      .catch(error => console.log(error))
  }
  
}