const initialState = {
    sagaItem: []

}

const sagaExampleReducer = (state= initialState, action) => {
    switch(action.type) {
       /*  
       not required in reducer
       case 'GET_SAGA_EXAMPLE':
            return 1; */
        case 'SET_SAGA_EXAMPLE':
                return {
                    ...state,
                    sagaItem: [...action.data]
                }
        default : return state;
    }
}
export default sagaExampleReducer