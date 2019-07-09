import {FETCH_DATA,SUCCESS,ERROR} from '../utilities/config';
const userReducer = (state = {user:null},action)=>{
    switch(action.type){
        case FETCH_DATA:
            return {
                type: SUCCESS,
                user: action.payload
            }
        case ERROR:
            return {
                type: ERROR,
                message: action.message
            }
        default:
            return state;
    }
}
export default userReducer;