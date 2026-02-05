import { createSlice } from "@reduxjs/toolkit";
const initialState={
    list:[],
    loading:false,
    error:null
} // react need starting state;used when state is undefined app load;
const deptSlice=createSlice({
    name:"dept", // Avoid collisons; dept/fetchStart,dept/fetchSuccess etc
    initialState,
    reducers:{
        // a small functions that recieve current state,recieve action,modify state
        fetchStart: (state) => {
            // why not return there because Redux Toolkit uses Immer
            // you write mutating code, but it produces immutable updates internally;
            state.loading = true
            state.error = null
        },
        fetchSuccess: (state, action) => {
            state.loading = false
            state.list = action.payload
            // action.payload=whatever data you passed in dispatch(fetchSuccess(data))
        },
        fetchFailure: (state, action) => {
            state.loading = false
            state.error = action.payload
        }
        // fetchStart,fetchSuccess,fetchFailure does not create Actios,these functions only tell redux what to do when actions happen
    }
})
export const { fetchStart, fetchSuccess, fetchFailure } = deptSlice.actions
export default deptSlice.reducer