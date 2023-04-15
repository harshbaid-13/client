import React from 'react'
import { useNavigate } from 'react-router-dom';
//import Landing from "../img/landing.png";



function Home() {

const navigate = useNavigate()

function viewPost() {
 navigate("/allposts");
}
  return (
    <div className='home'>
      <div className='but'>
        <button onClick={viewPost}>Here!</button>
        {/* <img src={Landing} alt="landingpage"/> */}
      </div>
    </div>
  )
}

export default Home