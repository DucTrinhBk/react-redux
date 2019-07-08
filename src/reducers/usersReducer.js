import {FETCH_DATA} from '../utilities/config';
const userReducer = (state = {users:[]},action)=>
{
    switch(action.type)
    {
        case FETCH_DATA:
            return {
                users : action.payload
            }
        default:
            return state;
    }
}
export default userReducer;