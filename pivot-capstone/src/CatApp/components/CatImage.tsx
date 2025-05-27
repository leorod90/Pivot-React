import React from 'react'

// onclick, btnTxt, imageOfCat
// lottie https://lottiefiles.com/free-animation/cat-loader-F4ZybShCAh
export default function CatImage(props) {
  return (
    <div style={{backgroundColor: 'gray'}}>
      <button onClick={props.onClick}>{props.btnTxt}</button>
      {props.imageOfCat && <img
        style={{
          //height and width is ok
          height: 200,
          width: 200,
          overflow: 'hidden',
          borderRadius: '50%',
          objectFit: "contain"
        }}
        src={props.imageOfCat}
        alt="default text"
      />}
    </div>
  )
}
