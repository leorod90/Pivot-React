import React from 'react'

export default function InfoComponent(props) {
  return (
    <div>
      {/* import and use; InfoComponent */}
      <h4>name favorite food is favFood</h4>
      <h4>{props.name} favorite food is {props.favFood}</h4>
      <p>I teach Software Development and I like to play video games</p>
    </div>
  )
}