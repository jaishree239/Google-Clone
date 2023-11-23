import { combineReducers } from "redux";
import counterReduer from './counterReducer'

const rootReducer = combineReducers({
    counterReduer
})

export default rootReducer

// import { combineReducers } from "redux";
// import counterReducer from "./counterReducer";

// const rootReducer = combineReducers({
//     counterReducer
// })

// export default rootReducer