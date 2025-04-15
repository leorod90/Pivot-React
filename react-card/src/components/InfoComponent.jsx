import React from 'react';
// ALWAYS PUT PROPS
// const Info = (props) => {}
export function InfoComponent(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.info}</p>
    </div>
  )
}