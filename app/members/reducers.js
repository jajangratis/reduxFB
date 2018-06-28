const initialState = {
    results : [],
    isLoading:false,
}

const memberReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case "GET_MEMBER_PENDING":
            return {...state , isLoading:true}
        case "GET_MEMBER_FULFILLED":
            return {...state,isLoading:false, results: action.payload.data}
        case "GET_MEMBER_REJECTED":
            return {...state , isLoading:false,results: action.payload.data}
        default:
            return state
    }
}

export default memberReducer
