import {combineReducers} from "redux";
import message_reducer from "./message_reducer";

const rootReducer = combineReducers({
    messages:message_reducer
})

export default rootReducer;