import {combineReducers} from "redux";
import cartReducer from "./cartReducer"
import sagaExampleReducer from "./sagaExampleReducer";

const rootReducer = combineReducers({
    cartReducer,
    sagaExampleReducer

})
export default rootReducer