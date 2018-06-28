const initialState = {
    results:[],
    isLoading:false
}

const friendsreqReducer = (state = initialState , action)=>{
    switch (action.type) {
        case "GET_FRIENDSREQ_PENDING":
            return {...state,isLoading:true}
        case "GET_FRIENDSREQ_FULFILLED":
            return {...state,isLoading:false,results:action.payload.data}
        case "GET_FRIENDSREQ_REJECTED":
            return {...state,isLoading:false,results:action.payload.data}
    
        default:
            return state
    }
}

export default friendsreqReducer