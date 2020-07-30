import axios from 'axios';

//Constantes
const dataInicial = {
    user: {_id:''}
}

const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
const LOG_OUT = 'LOG_OUT';

//Reducer
export default function userReducer (state = dataInicial, action){
    switch(action.type){
        case GET_USER_SUCCESS:
            return {...state, user: action.payload}
        case CREATE_USER_SUCCESS:
            return {...state}
        case LOG_OUT:
            return {user: {}}
        default:
            return state
    }
}

//Actions
export const getUserAction = user => async (dispatch,getState)=> {
    try {
        const res =  await axios.post('http://localhost:4000/api/users/login',user);
        dispatch({
            type: GET_USER_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.error(error);
    }
}

export const logOut = () => (dispacth,getState) =>{
    dispacth({
        type: LOG_OUT
    })
} 

export const createUserAction = (user) => async (dispatch,getState) => {
    try {
        await axios.post('http://localhost:4000/api/users/register',user);
        dispatch({
            type: CREATE_USER_SUCCESS
        })

    } catch (error) {
        console.error(error);
    }
}