import React from 'react';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({setnewUsername}) => {
  
  return <form className='UserForm' onSubmit={(event)=>{event.preventDefault()
    setnewUsername(document.getElementById('addUser').value)}}>
      <label htmlFor='addUser'></label>
      <input 
        autoFocus
        id = 'addUser'
        placeholder='Username'
        type='text'
        />

      <button type='submit'><FaSearch/></button>
  </form>
};

export default SearchBox;
