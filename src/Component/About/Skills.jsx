import React from 'react'

const Skills = () => {

  const skillArray = [
    { name: "JavaScript", per: "90%", limit: 90 },
    { name: "React", per: "80%", limit: 80 },
    { name: "node.js ", per: "70%", limit: 70 },
    { name: "mongoDB ", per: "65%", limit: 65 },
    { name: "Java ", per: "60%", limit: 60 },
    { name: "CSS", per: "100%", limit: 100 },
    { name: "HTML", per: "100%", limit: 100 },
  ];


  return (
    <div className='Skillpage' id='Skillss'>
      <h1>Skills</h1>
      <div className='Skills'>
        {skillArray.map((skill, index) => (
          <div key={index} className='skill'>
            <h3>{skill.name}</h3>
            <div className='progress-bar-container'>
              <div
                className='progress-bar'
                style={{ width: `${skill.limit}%` }}
              ></div>
            </div>
            <p>{skill.per}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills