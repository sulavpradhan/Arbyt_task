import React from 'react';
import { Link } from "react-router-dom";



const GetData = ({newUsername, posts}) => {

        
  if (newUsername === "") {
    return null;
  } 
  else {   
    return (
      <main>
        <ul>
            {posts.map((post)=>{
              return(
                
                <li className='post' key={post.id}>
                  <h2>
                    <Link to={`/Repos/${post.login}`}>
                      {post.login}
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
