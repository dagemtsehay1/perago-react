import {configureStore} from "@reduxjs/toolkit";
import rawDataReducer from "./rawDataReducer";

export default configureStore({
    reducer:{
        rawData: rawDataReducer
    }
});