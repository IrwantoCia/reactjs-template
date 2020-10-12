import actions from '../action/actionType'

const initialState ={
    count: 0,
    text: 'hello world'
}

const counter = (state = initialState, action)=>{
    switch(action.type){
        case actions.INCREMENT:
            return { ...state, count: state.count + action.data}
        case actions.DECREMENT:
            return { ...state, count: state.count - action.data}
        default:
            return state
    }
}

export default counter