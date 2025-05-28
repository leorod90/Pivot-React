import React from 'react'

// onclick, btnTxt, imageOfCat
// lottie https://lottiefiles.com/free-animation/cat-loader-F4ZybShCAh
export default function CatImage(props) {
  return (
    <div className="bg-gray-500 p-4 text-center rounded">
      <button
        onClick={props.onClick}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 hover:scale-105 transition-all duration-300"
      >
        {props.btnTxt}
      </button>

      {props.imageOfCat && (
        <img
          src={props.imageOfCat}
          alt="cat"
          className="max-h-[200px] max-w-[200px] rounded-full object-cover block"
        />
      )}
    </div>
  )
}
