import './App.css';
import SearchBox from './SearchBox';
import GetData from './GetData';
import Repos from './Repos';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  const [newUsername,setnewUsername] = useState('')
  const[posts , setposts] = useState([])
  useEffect(() => {
    const getApi = async()=>{

      const response = await fetch("https://api.github.com/search/users?q="+newUsername+"in:user")
      const data = await response.json()
      // console.log(data)
      let a = data.items
      setposts(a)}
    
      getApi();
  }, [newUsername]);
  return (
    <Router>
      <div className="App">
        <SearchBox
          setnewUsername={setnewUsername}  
        />
        <Switch>
          <Route exact path="/">
            <GetData
              newUsername={newUsername}
              posts={posts}
            />
          </Route>
          <Route exact path="/Repos/:login" component={Repos}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
