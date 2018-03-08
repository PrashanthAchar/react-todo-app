import {createStore, combineReducers, applyMiddleware} from 'redux'
import todoReducer from './reducers/todoReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
    todoData:todoReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store;