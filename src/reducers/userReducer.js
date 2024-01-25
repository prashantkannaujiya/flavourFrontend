const initialState = {
    user:null
}
function userReducer(state=initialState,action)
{
    if(action.type=='UPDATE_USER')
    {
        return {...state,user:action.payload}
    }
    if(action.type=='LOGOUT_USER')
    {
        return {...state,user:null}
    }
    return state;
}
export default userReducer;