/**
 * And then we also need a reducer, which is a function that basically decides what's going to happen to your state based on an action.
 */
import { SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS, SET_LOADING, SET_ALERT, REMOVE_ALERT } from '../types';

/**
 * We want to import all of our type and a reducer is just a function so we're going to export a default arrow function.
 * 
 * and a reducer takes in 2 things the state and action.
 * now remember when we dispatch that object to the reducer, it has a type and a possible payload.
 * 
 * Now, what we want to evaluate here is the type
 * we want to just put a javascript if else if and we want to say what is in this action.type
 * 
 * We're going to have certain cases now if it's for default, basically with no case.
 * We're just going to return the state as is like that
 * and then for any other cases, we're going to say case
 * 
 * So for instance let's do our SET_LOADING
 * so for SET_LOADING we want to return our state now
 * we want to return whatever is already in the state.
 * 
 * state is immutable, meaning we can't reassign it.
 * we have to basically make a copy of it and then up and then add any additions or changes to it.
 * 
 * Now the way we can copy it is with the spread operator.
 * We can just say triple dot and then state and that's going to copy whatever is in the current state
 * now what set loading does is it just sets the loading value to true because it's initially false
 */

export default (state, action) => {
    if(action.type == SEARCH_USERS){
        return {
            ...state,
            users: action.payload,
            loading: false
        }
    }
    else if(action.type == SET_LOADING){
        return {
            ...state,
            loading: true
        }
    }
    else if(action.type == CLEAR_USERS){
        return {
            ...state,
            users: [],
            loading: false
        }
    }
    else if(action.type == GET_USER){
        return {
            ...state,
            user: action.payload,
            loading: false
        }
    }
    else if(action.type == GET_REPOS){
        return {
            ...state,
            repos: action.payload,
            loading: false
        }
    }
    else{
        return state;
    }
}