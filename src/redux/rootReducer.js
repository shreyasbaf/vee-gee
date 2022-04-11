import { combineReducers } from "redux";
import imageReducer from "./image/imageReducer";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    image: imageReducer
})

export default rootReducer