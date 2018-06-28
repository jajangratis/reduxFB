const initialState = {
    results:[],
    data:{},
    isLoading:false
}

const notifReducer = ( state = initialState , action )=>{
    switch (action.type) {
        case "FETCH_ALL_NOTIFICATIONS_PENDING":
            return {...state , isLoading:true}
        case "FETCH_ALL_NOTIFICATIONS_FULFILLED":
            return {...state , isLoading:false , results : action.payload.data}
        case "FETCH_ALL_NOTIFICATIONS_REJECTED":
            return {...state , isLoading:false , results : action.payload.data}
        default:
            return state
    }
}

export default notifReducer