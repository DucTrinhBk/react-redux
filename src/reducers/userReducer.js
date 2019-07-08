import {FETCH_DATA} from '../utilities/config';
const userReducer = (state = {user:null},action)=>{
    switch(action.type){
        case FETCH_DATA:
            return {
                user: action.payload
            }
        default:
            return state;
    }
}
export default userReducer;