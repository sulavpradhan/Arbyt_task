import './App.css';
import SearchBox from './SearchBox';
import GetData from './GetData';
import DisplayData from './DisplayData';
import {useState} from 'react';

function App() {
  const [newUsername,setnewUsername] = useState('')
  return (
    <div className="App">
    <SearchBox
      setnewUsername={setnewUsername}  
    />
    <GetData
      newUsername={newUsername}
    />
    <DisplayData/> 
    </div>
  );
}

export default App;
