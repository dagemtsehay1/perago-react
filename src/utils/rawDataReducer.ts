import { createSlice } from "@reduxjs/toolkit";

export const rawDataSlice = createSlice({
    name : "rawData",
    initialState: {
        data: [],
        msg: ""
    },
    reducers :{
        setRawData : (state, action) =>{
            state.data = action.payload;
        },
        setMsg : (state, action)=>{
            state.msg = action.payload
        }
    }
});

export const {setRawData,setMsg} = rawDataSlice.actions;

export default rawDataSlice.reducer;