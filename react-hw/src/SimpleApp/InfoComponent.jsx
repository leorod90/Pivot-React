import React from 'react'

export default function InfoComponent(props) {
  return (
    <div style={{
      border:"4px solid gray",
      display:"flex",
      flexShrink:1,
      margin: 5,
      flexDirection:"column"
    }}>
      <h2>my name is {props.name}</h2>
      <p>I have {props.numOfCats} cat</p>
      <p>{props.hobbies}</p>
    </div>
  )
}
