//Action: A function that returns an object, which must have at least a property of type
import axios from 'axios';

export default (formData)=>{
    console.log("AUTH_ACTION RUNNING");
    //console.log(formData);
    const axiosPromise = axios({
        url: `${window.apiHost}/register`,
        method: 'POST',
        data: formData,
    })
    return{
        type:"AUTH_ACTION",
        payload:axiosPromise,
    }
}