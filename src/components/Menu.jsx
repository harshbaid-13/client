import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';

export const Menu = ({cat}) => {
  const [posts,setPosts] =useState( [] )

  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res= await axios.get(`/api/posts/?cat=${cat}`);
        setPosts(res.data);
      }
      catch(err){
        console.log(err);
      }
    }
    fetchData()
  },[cat]);

  //   const posts = [
  //       {
  //       id:1,
  //       title: " Lorem ipsum dolor sit amet",
  //       desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor",
  //       img:"https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
  //       },
    
  //       {
  //         id:2,
  //         title: " Lorem ipsum dolor sit amet",
  //         desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor",
  //         img:"https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",
  //       },
     
  //       {
  //           id:3,
  //           title: " Lorem ipsum dolor sit amet",
  //           desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor",
  //           img:"https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",  
  //       },
    
  //       {
  //         id:4,
  //         title: " Lorem ipsum dolor sit amet",
  //         desc:"Lorem ipsum dolor sit amet consectetur adipiscing elit sed diam nonumy eirmod tempor",
  //         img:"https://cdn.britannica.com/84/73184-004-E5A450B5/Sunflower-field-Fargo-North-Dakota.jpg",  
  //     },    
  // ];

  const getText = (html)=>{
    const doc =new DOMParser().parseFromString(html,"text/html")
    return doc.body.textContent
  }
  
  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map((post)=> (
            <div className="post" key={post.id}>
                <img src={`../upload/${post?.img}`} alt="" />
                <h2>{getText(post.title)}</h2>
                <button>Read More</button>
            </div>
        ))}
    </div>
  )
}

export default Menu;
