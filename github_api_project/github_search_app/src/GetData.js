import React from 'react';
import {useState} from 'react';

const GetData = ({newUsername}) => {
  const[posts , setposts] = useState("")

  // const getApi = (newUsername)=>{
  //  let a =fetch("https://api.github.com/users/"+newUsername)
  //     .then((response)=>response.json())
  //     .then((json)=>console.log(json))
  //   console.log(a)
      
  // }
  const getApi = async(newUsername)=>{
    const response = await fetch("https://api.github.com/users/"+newUsername)
    const data = await response.json()
    const a = data.avatar_url
    setposts(a)}
        
  if (newUsername === "") {
    return<div>
        
    </div>;
  } else {
    getApi(newUsername)
    
    return <div>
      {posts}
    </div>;
  }
};

export default GetData;
