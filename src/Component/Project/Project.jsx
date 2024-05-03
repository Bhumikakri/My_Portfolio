import React, { useState } from 'react';
import './project.css';
import allProject from './Allproject.json';

const Project = () => {
  const [assignment, setAssignment] = useState([...allProject]);

  return (
    <div className='Projectpage' id='projectss'>
      <h1>Projects</h1>
      <div style={{ display: "flex", padding:"1rem", gap: "2rem", flexWrap: 'wrap', alignItems: "center", justifyContent: "center" }}>
        {
          assignment.map((item) => {
            return <div style={{ width: "200px", height: "140px", margin: "0.5rem" }}>
              
              <a href={item.ProLink}><img style={{ width: "100%", height: "100%", borderRadius: "15px" }} src={item.Image ? item.Image : ""} /></a>
            <p style={{fontSize:"1.1rem", fontWeight:"2px"}} key={item.id}>{item.Name}</p></div>

          })
        }
      </div>
    </div>
  )
}

export default Project