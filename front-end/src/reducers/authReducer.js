//Reminder: A reducer is a FUNCTION that RETURNS an OBJECT or a PIECE OF STATE to the ROOT REDUCER
//This reducer manages the user's name & token
//If you want to change it, let it know by an action.type

export default (state = [],action)=>{
    //Signature (arguments) takes state; we default it to []
    if(action.type === 'AUTH_ACTION' || action.type === 'LOGIN_ACTION'){
        return action.payload.data;
    } else if(action.type === 'LOGOUT'){
        return [];
    } else {
        return state;
    }
}