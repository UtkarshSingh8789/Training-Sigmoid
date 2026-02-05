import axios from 'axios'
import { fetchStart,fetchFailure,fetchSuccess } from './departmentSlice.js'
const BASE_URL="http://localhost:3000/depts"
// A thunk is the function that return another function and is allowed to run async code
export const fetchDept=()=>async (dispatch) => {
    dispatch(fetchStart())
    try {
        const res=await axios.get(BASE_URL)
        console.log(res)
        dispatch(fetchSuccess(res.data))
    } catch (error) {
        dispatch(fetchFailure(error.message))
    }
}

// Thunk is a middle ware it sits between dispatch and reducer;
// Normal Flow without thunk;

// dispatch(action)
// reducer(state,action)

// dispatch({ type: 'dept/fetchStart',
//          payload:data})
// typeof action == "object"
// then it will pass to reduce -> no thunk middleware there; 


// flow with thunk

// dispatch(something)
// Thunk middleware checks:
// is "Something" a function ?

// dispatch(fetchData())
// fetchData is a function -> Thunk middle ware come here and works;
// typeof action=="Function" -> now main think middle ware works;
// if(typeof action=="function"){
//     action(dispatch,getdata)
// } // Now You will get how dispatch is parameter there;
