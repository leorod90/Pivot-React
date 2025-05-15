import React from 'react'

export default function Box(props) {
  return (
    <div
      style={{
        backgroundColor: props.color,
        height: props.size,
        width: props.size,
      }}
    ></div>
  )
}
