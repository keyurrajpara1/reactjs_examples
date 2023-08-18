import React, {useReducer} from 'react';
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from './githubReducer';

import { SEARCH_USERS, GET_USER, CLEAR_USERS, GET_REPOS, SET_LOADING, SET_ALERT, REMOVE_ALERT } from '../types';
/**
 * We're going to be using something called types and if you're familiar, if you're familiar with redux a lot of this stuff is going to make sense.
 */

/**
 * Here all of basically all of our actions are going to go
 * So when we call and action to fetch data or anything like that that's going to go in here
 * 
 * So this in here is going to be our initial state also is going to be basically our actions
 * like when we search users and we make a request to github that's going to go in here as opposed to writing to app.js
 */

const GithubState = (props) => {

    /**
     * our initial state going to go in here as opposed to our app.js
     * so we're really going to clean up that app.js file now
     */
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    /**
     * So this github state is going to include all of our actions now in order to basically dispatch to our reducer,
     * because what happens is we call an action it will for instance make a request to github
     * get a response and then we dispatch a type back to our reducer 
     * So we need to actually use the useReducer hook here
     */

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    /**
     * We want to do is dispatch to the reducer and object
     * and the object is going to be search users 
     * The type we want to put a type here is going to be search users and we want to send a payload.
     * The payload is the data we want to send and that's going to be the response data
     * ok so 2 things are happening here, we have the search users and then it calls set loading which 
     * dispatches the type of set loading to the reducer which we're going to create now
     * And then it makes the request and then it sends the type or dispatches the type of search users with the data.
     * And our reducer is going to be responsible of putting this into our state and sending it down to any components
     * that need it.
     */

    const searchUsers = async (text) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        console.log(res.data);
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        });
    }

    const clearUsers = () => {
        dispatch({type: CLEAR_USERS});
    }

    /**
     * Now all we want this to do, this set loading is dispatch to our reducer.
     * so we do that with the dispatch that was pulled from the useReducer hook.
     * And what we dispatch is an object that has a type.
     * ok. it has to have a type. you can send a payload with data if needed.
     * but for this we don't actually need a payload. we just need the type which is going to be set loading
     * and reducer is going to catch that we need to basically handle that within the reducer
     */
    const setLoading = () => { dispatch({type: SET_LOADING}); }

    /**
     * We basically have to wrap our entire application with the provider
     * Now this provider is going to take in a bunch of props, which is going to well,
     * it's going to take in one prop of value, which we want to set here
     * 
     * like this, and we want to pass in anything that we want available to the entire app, such as users.
     * So the point here is we're making this available to our entire app.
     * 
     * Now any methods or action methods we create here like search users and so on we're also going to want to pass those.
     * And I haven't created those yet, so I'm not going to pass them in just yet.
     * 
     * Now in the middle here, we just simply need to put in props.children
     * because we're going to wrap our entire application in this provider.
     */

    const getUser = async (username) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        console.log(res.data);
        dispatch({
            type: GET_USER,
            payload: res.data
        });
    }

    const getUserRepos = async (username) => {
        // console.log(text);
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
        console.log(res.data);
        dispatch({
            type: GET_REPOS,
            payload: res.data
        });
    }

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}
export default GithubState;

/**
 * 
 * So in the last video, we setup our contexts, we setup our GithubState file with the initial state and so on.
 * now we want to basically move everything from app.js to our contexts into our state
 * And we want to have a reducer that's going to basically change the state of certain components that need changing when something happens.
 * 
 * We're going to go one by one with these methods here like search users and we're going to move them to the githubState
 * basically to you know as using them as actions.
 * And then i'll show you how we can connect to the context within individual components using the useContext hook
 * 
 * ok we also have to have some reducer functions
 * now we don't have a set loading function, so let's create that real quick, it's going to be very simple
 * 
 * Everything we took the search user out of the main app component and we no longer have to pass things that have to 
 * pass it in as a prop and catch it and all that.
 * 
 * It's just if we want to use that method in any component, all we have to do is bring in the context, initialize it
 * and then call whatever piece of state or whatever action we want that's associated with that context.
 * 
 * So let's see if this actually works
 * we could use search users absolutely anywhere 
 * we could use any of this stuff any of this global state
 * we can use in any component simply by bringing it in like this.
 */