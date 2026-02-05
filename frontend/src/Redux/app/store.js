// This file will create the redux store;
import { configureStore } from '@reduxjs/toolkit'
import deptReducer from '../features/department/departmentSlice.js'// this is a reducer function created by createSlice
// a centralized object that holds entire application state;
// redux store needs reducers and reducers decide how state changes;
// whenever a action will happens reducer will update the state;
export const store=configureStore({
    reducer:{
        // reducer is an object because the app can have multiple features and each features has its own reducers;
        dept:deptReducer
    }
})
// INTERNAL STRUCTURE;
// {
//   dept: {
//     list: [],
//     loading: false,
//     error: null
//   }
// }