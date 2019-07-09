import {FETCH_DATAS,SUCCESS,ERROR,NO_RESULT} from '../utilities/config';
const usersReducer = (state = {users:[]},action)=>
{
    switch(action.type)
    {
        case FETCH_DATAS:
            let n = action.payload.length;
            return {
                type: n >0? SUCCESS:NO_RESULT,
                data : action.payload,
                message:n > 0?'data was loaded successfully': 'No data was found'
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
export default usersReducer;