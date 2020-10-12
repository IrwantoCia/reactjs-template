import React from 'react'
import {connect} from 'react-redux'
import { addCount, minusCount } from '../redux/action/action'

const Counter = (props) => {
  const{count, addCount, minusCount} = props

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        height: '100vh',
        justifyContent: 'center',
      }}
    >
      <button onClick={(e)=>minusCount()}>-</button>
      <span style={{ margin: '1em' }}>{count}</span>
      <button onClick={(e)=>addCount()}>+</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return {
    count:state.count
  }
}

const mapDispatchToProps={
  addCount:addCount,
  minusCount:minusCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);