import actions from './actionType'

export const addCount = (value=1) =>async(dispatch)=>{
    dispatch({type:actions.INCREMENT, data: value})
}

export const minusCount = (value=1) =>async(dispatch)=>{
    dispatch({type:actions.DECREMENT, data: value})
}