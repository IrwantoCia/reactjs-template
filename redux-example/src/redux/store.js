import {applyMiddleware,createStore} from 'redux'
import thunk from 'redux-thunk'
import counter from './reducer/counter'

export default createStore(counter, applyMiddleware(thunk))