import {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const actions = {
  apiRequest:"apiRequest",
  fetchData:"fetchData",
  error:"error"
};

const reducer = (state, action) => {
  if(action.type == actions.apiRequest){
    return {
      ...state,
      data: [],
      loading: true
    };
  }
  else if(action.type == actions.fetchData){
    return {
      ...state,
      data: action.payload.responseData,
      loading: false
    };
  }
  else if(action.type == actions.error){
    return {
      ...state,
      data: [],
      loading: false,
      error: action.payload.message
    };
  }
  else{
    return state;
  }
};

const useFetchApiData = (apiUrl) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    
    dispatch({
      type: actions.apiRequest,
    });

    axios.get(apiUrl).then((response) => {
      console.log(response);
      dispatch({
        type: actions.fetchData,
        payload: {
          responseData: response.data
        }
      });
    })
    .catch((error) => {
      dispatch({
        type: actions.error,
        payload: {
          message: error
        }
      });
    });

  }, [apiUrl]);
  
  return state;
}
export default useFetchApiData;