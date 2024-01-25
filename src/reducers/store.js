import userReducer from "./userReducer";
import { legacy_createStore } from "redux";
var mainstore=new legacy_createStore(userReducer);
export default mainstore;