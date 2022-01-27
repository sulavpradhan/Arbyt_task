import React from 'react';
import SearchBox from './SearchBox';
import './Header.css';


const Header = ({setnewUsername}) => {
  return <header className='header'>
      <a href='/' style={{color:'black', textDecoration:'none'}}>
        <h3>github search</h3>
      </a>
      <SearchBox
          setnewUsername={setnewUsername}  
        />
  </header>;
};

export default Header;
