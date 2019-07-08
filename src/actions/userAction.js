import {KEYAPI,FETCH_DATA} from '../utilities/config';
const getData = (id)=>dispatch =>{
    fetch('https://gorest.co.in/public-api/users/'+id,{
        method: 'GET',
        headers: {
            'content-type':'application/json',
            'Authorization': KEYAPI
        }
    }).then(res=>res.json())
    .then(data =>{
        if(data._meta.success){
            dispatch({
                    type: FETCH_DATA,
                    payload: data.result
                }
            )
        }
    })
}
export default getData;