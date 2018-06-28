const initialState = {
    results:[],
    isLoading:false
}

const marketsreqReducer = (state = initialState , action)=>{
    switch (action.type) {
        case "GET_MARKETS_PENDING":
            return {...state,isLoading:true}
        case "GET_MARKETS_FULFILLED":
            return {...state,isLoading:false,results:action.payload.data}
        case "GET_MARKETS_REJECTED":
            return {...state,isLoading:false,results:action.payload.data}
    
        default:
            return state
    }
}

export default marketsreqReducer