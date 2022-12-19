import { createSlice } from "@reduxjs/toolkit";

export const rawDataSlice = createSlice({
    name : "rawData",
    initialState: {
        data: [],
    },
    reducers :{
        setRawData : (state, action) =>{
            state.data = action.payload;
        }
    }
});

export const {setRawData} = rawDataSlice.actions;

export default rawDataSlice.reducer;