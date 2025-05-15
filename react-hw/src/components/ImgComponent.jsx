import React from 'react'

// DON'T USE DEFAULT, Props 
export function ImgComponent(props) {
  return (
    <div>
      <img
        src={props.src}
        alt=''
      />
    </div>
  )
}
