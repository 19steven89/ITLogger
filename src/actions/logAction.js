import {GET_LOGS, SET_LOADING, LOGS_ERROR} from "./types";

// alternate way of doing the function:
// export const getLogs = () => {
//     // uses redux thunk to return a function to the logReducer.js switch statement
//     return async (dispatch) => {
//         setLoading()

//         const res = await fetch("/logs");
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     }
// }

// get logs from server
export const getLogs = () => async dispatch => {        
    try {
        setLoading();
        const res = await fetch("/logs");
        const data = await res.json();

        dispatch({
            // make the type GET_LOGS and set the payload = to the data that comes back from the res.json() call
            type: GET_LOGS,
            payload: data
        });   
    } catch (error) {
        dispatch({
            type: LOGS_ERROR,
            payload: error.response.data
        });
    }
}

export const setLoading = () => {
    // return to the reducer a type of set_loading
    // set loading to true
    return {
        type: SET_LOADING
    };
}