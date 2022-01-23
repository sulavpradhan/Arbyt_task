import React from 'react';
import SearchBox from './SearchBox';
import './Header.css';


const Header = ({setnewUsername}) => {
  return <header className='header'>
      <h3>github search</h3>
      <SearchBox
          setnewUsername={setnewUsername}  
        />
  </header>;
};

export default Header;
