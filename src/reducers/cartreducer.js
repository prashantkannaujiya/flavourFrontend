const initialState={
    cart:[]
}
function cartreducer(state=initialState,action)
{
if(action.type=='ADD_PRODUCT')
{
    return {...state,cart:[...state.cart,action.payload]}
}
return state;
}