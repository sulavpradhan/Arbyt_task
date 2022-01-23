import React from 'react';
import { Link } from "react-router-dom";



const GetData = ({newUsername, posts}) => {

        
  if (newUsername === "") {
    return null;
  } 
  else {   
    return (
      <main style={{display:'inline-flex'}}>
        <ul style={{listStyle: 'none'}}>
            {posts.map((post)=>{
              return(
                
                <li className='post' key={post.id}>
                  <h2>
                    <Link to={`/Repos/${post.login}`}>
                        <div style={{border:'3px solid #238636', height: '200px', width: '200px', padding: '50px'}}>
                          <div>
                            <img src={post.avatar_url} width = "150" height = "150" style={{margin:'25px 25px 5px 25px'  }}></img>
                          </div>
                          {post.login}                                                   
                        </div>
                      </Link>
                  </h2>
                                      
                </li>
              
              )
            }) }
        </ul>
      </main>);
  }
};

export default GetData;
