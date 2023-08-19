const initialState ={
    list: [],
}

const cartReducer = (state=initialState, action) =>{
    console.warn("cartReducer", action)
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                list:[...state.list, action.payload]
            };
        case "REMOVE_TO_CART":
            state.list.length= state.list.length? state.list.length-1: 0
            return {
                ...state,
                list:[...state.list]
            };
        default: return state
    }
}
export default cartReducer;