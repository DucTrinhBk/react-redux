import {KEYAPI,FETCH_DATA} from '../utilities/config';
const getDatas = ()=>dispatch =>{
    fetch('https://gorest.co.in/public-api/users',{
        method: 'GET',
        'headers': 
        {
            'content-type':'application/json',
            'Authorization':KEYAPI
        }
    })
    .then(res =>res.json())
    .then(data =>
        {
            if(data._meta.success){
                dispatch({
                        type: FETCH_DATA,
                        payload: data.result
                    }
                )
            }
        })
}
export default getDatas;