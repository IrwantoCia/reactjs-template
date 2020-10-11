import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const addCount = () => {
    const result = count + 1
    setCount(result)
  }

  const decreaseCount = () => {
    const result = count - 1
    setCount(result)
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <button onClick={decreaseCount}>-</button>
      <span style={{ margin: '1em' }}>{count}</span>
      <button onClick={addCount}>+</button>
    </div>
  )
}

export default Counter
