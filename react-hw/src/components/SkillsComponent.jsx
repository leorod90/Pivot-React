import React from 'react'

export function SkillsComponent(props) {
  return (
    <div
     className="skills-btn"
     style={{
      color: 
      props.name == "Javascript" ?
       "black" : 
       "white",
      backgroundColor: props.color // green
     }}
    >
      <p>{props.name}</p>
    </div>
  )
}
