import React from 'react'
import logo from './logo.svg'
import './App.css'

import { Provider } from 'react-redux'
import Counter from './component/Counter'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

export default App
