import React from 'react';
import { Link } from "react-router-dom";



const GetData = ({newUsername, posts}) => {

        
  if (newUsername === "") {
    return null;
  } else {   
    return <div>
      <Link to="/Repos">
       {posts}
      </Link>
    </div>;
  }
};

export default GetData;
