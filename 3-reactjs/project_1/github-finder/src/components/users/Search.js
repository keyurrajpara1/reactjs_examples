import React, {useContext, useState} from 'react'
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);

    /**
     * In search.js file also we no longer have search users as a prop
     * also need to remove from the proptypes.
     * 
     * So the way that we do this is with the useContext hook.
     * and what we want to do now is bring in our context so we're going to say import githubContext
     * 
     * In the function here in the search function we're going to initialize our github context
     * const githubContext = useContext(githubContext);
     * 
     * Now if we go down to where we actually call search users, this is now part of the github context
     * so i can simply say
     * githubContext.searchUsers(text);
     */

    const [text, setText] = useState("");

    const onChange = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(text);
        if(text===''){
            alertContext.setAlert('Please enter something', 'light');
        }
        else{
            githubContext.searchUsers(text);
            setText('');
        }
    }
  
    return (
      <div>
        <form className='form' onSubmit={onSubmit}>
            <input type='text' name='text' placeholder='Search Users...' value={text} onChange={onChange} />
            <input type='submit' value='Search' className='btn btn-dark btn-block' />
        </form>
        {
            githubContext.users.length > 0 && <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button>
        }
      </div>
    )
  
}

export default Search