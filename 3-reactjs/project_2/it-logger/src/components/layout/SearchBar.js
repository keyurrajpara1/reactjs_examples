import React from 'react'

/**
 * It's not going to have any props or anything like that right now.
 * When we use redux later, I'm going to explain how that works.
 * Basically, you have app level state and the way that you access pieces of state in your components is through props.
 * You pass it down to props.
 */

const SearchBar = () => {
  return (
    <nav style={{marginBottom: '30px'}} className='blue'>
        <div className="nav-wrapper">
        <form>
            <div className="input-field">
            <input id="search" type="search" />
            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
            </div>
        </form>
        </div>
    </nav>
  )
}

export default SearchBar;