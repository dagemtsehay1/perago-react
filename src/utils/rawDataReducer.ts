import { createSlice } from "@reduxjs/toolkit";

export const rawDataSlice = createSlice({
    name : "rawData",
    initialState: {
        data: [
            {
              "id": 0,
              "name": "CEO",
              "description": "head",
              "parentId": null
            },
            {
              "id": 1,
              "name": "CTO",
              "description": "cheef technical officer",
              "parentId": 0
            },
            {
              "id": 2,
              "name": "CBE",
              "description": "cheef technical officer",
              "parentId": 0
            },
            {
              "id": 3,
              "name": "CEO",
              "description": "cheef technical officer",
              "parentId": 1
            },
            {
              "id": 4,
              "name": "HR",
              "description": "cheef technical officer",
              "parentId": 1
            },
            {
              "id": 5,
              "name": "kr",
              "description": "cheef technical officer",
              "parentId": 4
            },
          ]
    },
    reducers :{
        setRawData : (state, action) =>{
            state.data = action.payload;
        }
    }
});

export const {setRawData} = rawDataSlice.actions;

export default rawDataSlice.reducer;