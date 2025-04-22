import React, { useState } from 'react'

export default function CounterApp() {
  const [countNumber, setCountNumber] = useState(0);

  const addHandler = () => {
    setCountNumber(prevCount => prevCount + 1);
  }

  const deleteHandler = () => {
    setCountNumber(prevCount => prevCount - 1);
  }

  return (
    <div>
      <div className=''>
        <h3>Count {countNumber}</h3>
        <button onClick={deleteHandler}>-</button>
        <button onClick={addHandler}>+</button>
      </div>
    </div>
  )
}
