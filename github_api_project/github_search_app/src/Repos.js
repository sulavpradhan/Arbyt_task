import React from 'react';
import {useState, useEffect} from 'react';

const Repos = ({match}) => {
  const[Repo , setRepo] = useState([])
  var newName = match.params.login
  useEffect(() => {
    const getApi = async()=>{

      const response = await fetch(`https://api.github.com/users/${newName}/repos`)
      const data = await response.json()
      let a = data
      setRepo(a)
    }
    
    getApi();
  }, [newName]);
  
  return(

  <main>
  <ul style={{listStyle: 'none'}}>
      {Repo.map((item)=>{
        return(
          
          <li className='Repo' key={item.id}>
            <h2>
              {item.name}
            </h2>
                                
          </li>
        
        )
      }) }
  </ul>
</main>
  )
};

export default Repos;
