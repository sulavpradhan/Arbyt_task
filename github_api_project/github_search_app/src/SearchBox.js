import React from 'react';
import "./SearchBox.css"

const SearchBox = ({setnewUsername}) => {
  
  return <form className='UserForm' onSubmit={(event)=>{event.preventDefault()
      setnewUsername(document.getElementById('addUser').value)}}>
      <label htmlFor='addUser'></label>
      <input 
        autoFocus
        id = 'addUser'
        placeholder= "Search username &#xF002;"
        role='searchbox'
        type='text'
        style={{borderRadius:'10px', marginTop:'18.720px', marginRight:'1em'}}
        />
      
    </form>
};

export default SearchBox;
